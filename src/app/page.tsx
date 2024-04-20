import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/sign-in"> sign in</Link>
      <Link href="/sign-up"> sign up</Link>

    </div>
  );
}
