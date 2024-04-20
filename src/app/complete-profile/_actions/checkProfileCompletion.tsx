"use server"
import { auth } from "@clerk/nextjs/server"
import prisma from "@/app/db"

export default async function checkProfileCompletion() {
    const { userId } = auth()
    if (!userId) throw new Error("User not authenticated");
    let profileCompletion = null;
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            profile_completed: true
        }
    });

    if (user) {
        profileCompletion = user?.profile_completed;
        return profileCompletion;
    } else return null;
}