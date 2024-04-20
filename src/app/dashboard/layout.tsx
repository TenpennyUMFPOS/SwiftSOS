import { RedirectType, redirect } from "next/navigation";
import Aside from "../_components/aside";
import { auth } from "@clerk/nextjs/server";
import isUserReady from "../actions/isUserReady";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import {
  messagesCollectionRef,
  usersPosCollectionRef,
  db,
} from "../../../firebase";
export default async function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    const { userId } = auth();
    if (!userId) throw new Error("User not authenticated");
     const userReady = await isUserReady();
     if (!userReady) redirect("/complete-profile", RedirectType.replace);
    const q_mess = query(usersPosCollectionRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q_mess);

    if (!querySnapshot.empty) {
      console.log("Document data:", querySnapshot.docs[0].data());
    } else {
      addDoc(usersPosCollectionRef, {
        userId: userId,
        positionX: 0,
        positionY: 0,
      });
    }
  return (
    <div className="overflow-hidden grid h-screen w-full pl-[56px]">
      <Aside />
      {children}
    </div>
  );
}
