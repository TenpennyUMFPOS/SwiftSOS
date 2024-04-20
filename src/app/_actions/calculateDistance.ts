"use server";

import {
  addDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  ambulancesPosCollectionRef,
  db,
  messagesCollectionRef,
  participantsCollectionRef,
  usersPosCollectionRef,
} from "../../../firebase";
import { calculateDistanceHelper } from "@/utils/calculateDistanceHelper";

export default async function calculateDistance(userId: string) {
  const q_user = query(usersPosCollectionRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q_user);
  const positionUserX = querySnapshot.docs[0].data().positionX;
  const positionUserY = querySnapshot.docs[0].data().positionY;
  console.log(positionUserX, positionUserY);

  //getAll ambulances positions to compare withe the user position
  const q_ambulances = query(ambulancesPosCollectionRef);
  const amb_querySnapshot = await getDocs(q_ambulances);
  amb_querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const distance = calculateDistanceHelper(
      positionUserX,
      positionUserY,
      doc.data().positionX,
      doc.data().positionY
    );
    console.log(distance);
    if (distance < 10) {
      addDoc(participantsCollectionRef, {
        ambulanceId: doc.id,
        userId: userId,
      });
      return;
    }
  });
}
