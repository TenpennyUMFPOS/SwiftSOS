"use  server";
import { auth } from "@clerk/nextjs/server";
import prisma from "../db";

export default async function isUserReady() {
  const { userId } = auth();
  if (!userId) throw Error("User needs to authenticate");
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      profile_completed: true,
    },
  });
  if (!user || !user?.profile_completed) return false;
  else return true;
}
