import { RedirectType, redirect } from "next/navigation";
import Aside from "../_components/aside";
import { auth } from "@clerk/nextjs/server";
import isUserReady from "../_actions/isUserReady";
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
  participantsCollectionRef,
} from "../../../firebase";
import calculateDistance from "../_actions/calculateDistance";
export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  if (!userId) throw new Error("User not authenticated");
  const userReady = await isUserReady();
  if (!userReady) redirect("/complete-profile", RedirectType.replace);
  const q_user = query(usersPosCollectionRef, where("userId", "==", userId));
  const querySnapshot = await getDocs(q_user);

  if (querySnapshot.empty) {
    addDoc(usersPosCollectionRef, {
      userId: userId,
      positionX: 0,
      positionY: 0,
    });
  }
  let stop_interval = false;
  function executeEvery10Seconds(userId: string) {
    const intervalID = setInterval(async () => {
      const q_part = query(
        participantsCollectionRef,
        where("userId", "==", userId)
      );
      const part_querySnapshot = await getDocs(q_part);
      if (part_querySnapshot.empty) {
        calculateDistance(userId);
        stop_interval = true;
      }
    }, 10000);

    return intervalID;
  }

  const intervalID = executeEvery10Seconds(userId);
  if (stop_interval) clearInterval(intervalID);
  return (
    <div className="overflow-hidden grid h-screen w-full pl-[56px]">
      <Aside />
      {children}
    </div>
  );
}
