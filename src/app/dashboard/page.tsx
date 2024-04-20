import {
  CornerDownLeft,
  LifeBuoy,
  ListCollapse,
  Settings,
  Share,
  Siren,
  SquareUser,
  Triangle,
  LogOut,
  Dumbbell,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { AssistanceDetails } from "../_components/assistanceDetails";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Chat } from "../_components/chat";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  messagesCollectionRef,
  participantsCollectionRef,
} from "../../../firebase";
import { DocumentData, getDocs, query, where } from "firebase/firestore";
import { MessageInput } from "../_components/MessageInput";

export default async function Dashboard() {
  const { userId } = auth();
  if (!userId) throw new Error("User not authenticated");

  const q_participants = query(
    participantsCollectionRef,
    where("userId", "==", userId)
  );

  let ambulanceId = null;
  const querySnapshot = await getDocs(q_participants);

  if (querySnapshot.empty) {
    console.log("No matching documents.");
  } else {
    ambulanceId = querySnapshot.docs[0].data().ambulanceId;
  }


  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Emergency</h1>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <ListCollapse className="size-4" />
              <span className="sr-only">List</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="max-h-[80vh]">
            <DrawerHeader>
              <DrawerTitle>Emergency Nearby</DrawerTitle>
            </DrawerHeader>
            <div className="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
              <AssistanceDetails />
            </div>
          </DrawerContent>
        </Drawer>
        <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm">
          <Share className="size-3.5" />
          Share
        </Button>
      </header>
      <main className="grid flex-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="relative hidden flex-col items-start gap-8 md:flex"
          x-chunk="dashboard-03-chunk-0"
        >
          <div className="grid w-full items-start gap-6">
            <AssistanceDetails />
          </div>
        </div>
        <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
          <div className="flex-1 ">
            {ambulanceId && <Chat ambulanceId={ambulanceId} userId={userId} />}
          </div>
          <MessageInput userId={userId} ambulanceId={ambulanceId} />
        </div>
      </main>
    </div>
  );
}
