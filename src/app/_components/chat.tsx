"use client";
import { useEffect, useState } from "react";
import { Message } from "./Message";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { messagesCollectionRef } from "../../../firebase";
import { FirebaseResponse } from "@/utils/types";
import { generateRandomColor } from "@/utils/generateRandomColor";
import getUserById from "../_actions/getUserById";

export const Chat = ({
  ambulanceId,
  userId,
}: {
  ambulanceId: string;
  userId: string;
}) => {
    
  const [messages, setMessages] = useState<FirebaseResponse[]>([]);
  const [avatarColor, setAvatarColor] = useState<string>("");

  useEffect(() => {
    const q_mess = query(
      messagesCollectionRef,
      orderBy("createdAt", "asc"),
      where("ambulanceId", "==", ambulanceId)
    );
    const unsubscribe_messages = onSnapshot(q_mess, (snapshot) => {
      // setMatches(snapshot.docChanges().map(doc => ({ id: doc.id, data: doc.data() })))
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log(change.doc.data());
          setMessages((prev) => [
            ...prev,
            { id: change.doc.id, data: change.doc.data() },
          ]);
        }
      });
    });

    return () => {
      unsubscribe_messages();
    };
  }, []);

  useEffect(() => {
    let avatarColor = localStorage.getItem("avatarColor");
    let color = "";
    if (!avatarColor) {
      avatarColor = generateRandomColor();
    }
    setAvatarColor(avatarColor);
  }, []);
  return (
    <ScrollArea className=" h-screen">
      <div className="flex-col space-y-5">
        {messages.map((message) => {
          console.log(message.id);
          return (
            <Message
              key={message.id}
              data={message.data}
              userId={userId}
              avatarColor={avatarColor}
            />
          );
        })}
      </div>
      <div className="h-[230px] xl:h-[250px]"></div>
    </ScrollArea>
  );
};
