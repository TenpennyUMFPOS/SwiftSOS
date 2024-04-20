"use client";

import { Instructions } from "./instructions";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Description } from "./description";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db, usersPosCollectionRef } from "../../../firebase";
import { useAuth } from "@clerk/nextjs";
export const AssistanceDetails = () => {
  const { userId } = useAuth();
  if (!userId) throw new Error("User not authenticated");
  const [requestAssistance, setRequestAssistance] = useState(false);
  const offerAssistance = () => {
    setRequestAssistance(true);
  };
  const saveUserPositionToFirebase = async (
    latitude: number,
    longitude: number
  ) => {
    const q_mess = query(usersPosCollectionRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q_mess);
    console.log(latitude, longitude);
    if (!querySnapshot.empty) {
      /* console.log("Document data:", querySnapshot.docs[0].data()); */
      const userRef = doc(db, "users", querySnapshot.docs[0].id);
      await updateDoc(userRef, {
        positionX: latitude,
        positionY: longitude,
      });
      /*    console.log(querySnapshot.docs[0].id); */
    } /* else {
      addDoc(usersPosCollectionRef, {
        userId: userId,
        positionX: latitude,
        positionY: longitude,
      });
    } */
  };
  useEffect(() => {
    const intervalID = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          saveUserPositionToFirebase(
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          console.error("Error getting current position:", error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 30000,
          timeout: 5000,
        }
      );
    }, 10000); // 10 seconds interval

    // Return cleanup functions to clear the  interval when the component unmounts
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <>
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium">
          Emergency Assistance Details
        </legend>
        {requestAssistance ? (
          <Description />
        ) : (
          <div className="grid gap-3">
            <Button
              className="w-32"
              variant="default"
              onClick={offerAssistance}
            >
              Offer assistance
            </Button>
            if you're willing to help nearby ambulances. Your location will be
            shared with crews. Stay safe and await further instructions.
          </div>
        )}
      </fieldset>
      {requestAssistance && <Instructions />}
    </>
  );
};
