// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="h1-bold">Home</h1>
      <Link href="/sign-in">Sign-In</Link>
      <Link href="/sign-up">Sign-Up</Link>
    </main>
  );
}
