import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>HOme page</h1>
      <Link href="/sign-in"> sign in</Link>
      <Link href="/sign-up"> sign up</Link>

    </div>
  );
}
