"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FirebaseResponse } from "@/utils/types";
import { User } from "@prisma/client";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import getUserById from "../_actions/getUserById";
export const Message = ({
  data,
  userId,
  avatarColor,
}: {
  data: DocumentData;
  userId: string;
  avatarColor: string;
}) => {
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);
  const getUser = async () => {
    const userQuerry = await getUserById(userId);
    return userQuerry;
  };
  return (
    <div className="flex items-start space-x-2">
      <div
        style={{ backgroundColor: `${avatarColor}` }}
        className="w-10 h-10 flex justify-center items-center rounded-full"
      >
        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
        <div>CN</div>
      </div>
      <div className="flex-col">
        <span className="font-semibold">{user?.username}</span>

        <p>{data.message}</p>
      </div>
    </div>
  );
};
