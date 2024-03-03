import Link from "next/link";
import { Button } from "@/components/ui/button";
import sprout from "./assets/mainsprout.jpg";
import Image from "next/image";

export default function home() {
  return (
    <main>
      <div className="pt-40 m-auto w-full">
        <Image className="m-auto" src={sprout} alt="profile" />
      </div>
      <div className="pt-8 text-5xl font-semibold text-center">
        welcome to sproutpal
      </div>
      <div className="mt-8 text-xl font-medium text-center">
        let's help you meet some new pals
      </div>
      <div className="w-full flex">
        <Button className="mt-8 mx-auto">
          <Link href="/form">find me a friend</Link>
        </Button>
      </div>
    </main>
  );
}
