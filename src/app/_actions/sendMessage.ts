"use server";

import { addDoc, doc, updateDoc } from "firebase/firestore";
import { db, messagesCollectionRef } from "../../../firebase";

export default async function sendMessage(formData: FormData) {
    console.log(formData);
  addDoc(messagesCollectionRef, {
    senderId: formData.get("senderId"),
    message: formData.get("content"),
    ambulanceId: formData.get("ambulanceId"),
    createdAt: new Date(),
  });
}
