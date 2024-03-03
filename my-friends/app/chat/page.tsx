"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Chat = () => {
  const [value, setValue] = useState("");
  const router = useRouter();
  return (
    <div className="m-auto w-3/5">
      <div className="pt-32 text-3xl font-semibold text-center">
        what would you like to know about your pals?
      </div>
      <div className="pt-8 text-2xl text-center">examples:</div>
      <div className="grid grid-cols-2">
        <Card
          className="p-8 m-auto my-8 cursor-pointer"
          onClick={() => router.push("/result", { scroll: false })}
        >
          who would i most likely get along with?
        </Card>
        <Card
          className="p-8 m-auto my-8 cursor-pointer"
          onClick={() => router.push("/result", { scroll: false })}
        >
          who would i most likely get along with?
        </Card>
      </div>
      <div className="flex mt-8">
        <Input
          className="mr-4"
          placeholder="Type here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className="px-8">
          <Link href="/reply">go</Link>
        </Button>
      </div>
    </div>
  );
};

export default Chat;
