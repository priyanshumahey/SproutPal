import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function home() {
  return (
    <main>
      <div className="mt-56 text-5xl font-semibold text-center">
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
