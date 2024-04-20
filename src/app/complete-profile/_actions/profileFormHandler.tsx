"use server"

import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/app/db";
import { RedirectType, redirect } from "next/navigation";



type userData = {
    avatar: File;
    username: string;
    gender: string;
    birth: string;

    emergencyResponseExperience: string;
}

export default async function profileFormHandler(formData: FormData) {

    const { userId } = auth();
    if (!userId) throw new Error("User not authenticated");
    const user = await currentUser();
    let avatar_url = "";

    function normalizeDate(date: number, month: number, year: number): string {
        const transformedDate = new Date(year, month - 1, date);
        const isoDateString = transformedDate.toISOString();
        return isoDateString;
    }

    const birth = normalizeDate(
        +formData.get("birth_date")!,
        +formData.get("birth_month")!,
        +formData.get("birth_year")!
    );
    function getAllSkills() {
        const skills = [];
        skills.push(formData.get("skill-0"));
        skills.push(formData.get("skill-1"));
        skills.push(formData.get("skill-2"));
        skills.push(formData.get("skill-3"));
        skills.push(formData.get("skill-4"));
        return skills.map((skill) => ({ skill }));
    }

    const userData: userData = {
        avatar: formData.get("avatar") as unknown as File,
        username: formData.get("username") as string,
        gender: formData.get("gender") as string,
        birth: birth as string,
        emergencyResponseExperience: formData.get("ERE") as string
    }

    try {
        // Create user using Prisma
        await prisma.user.create({
            data: {
                id: userId,
                username: userData.username,
                gender: userData.gender,
                birth: userData.birth,
                emergencyResponseExperience: userData.emergencyResponseExperience
            }
        });



    } catch (error) {
        throw error;
    }
    redirect("/dashboard", RedirectType.replace);




}