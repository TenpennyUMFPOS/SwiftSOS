import { DocumentData } from "firebase/firestore";

export type FirebaseResponse = {
  id: string;
  data: DocumentData;
};
