"use server";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import prisma from "../db";

export default async function getUserById(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  } catch (error) {
    throw error;
  }
}
