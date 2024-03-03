import React from "react";
import { Card } from "./card";
import { Progress } from "./progress";
import sprout from "../../app/assets/sprout.png";
import Image from "next/image";

type ResultCardProps = {
  name?: string;
};

const ResultCard: React.FC<ResultCardProps> = ({ name }) => {
  return (
    <Card className="w-[900px] p-8 my-8 flex">
      <div className="w-1/5">
        <div className="rounded-[50%] bg-black w-16 h-16 m-auto">
          <Image src={sprout} alt="profile" />
        </div>
      </div>
      <div className="w-4/5">
        <div className="flex">
          <div className="font-bold">kirby</div>
          <Progress className="m-auto mx-8" value={33} />
        </div>
        <div className="mt-4">discord</div>
        <div className="grid grid-cols-2 w-full mt-5">
          <div>
            <div className="font-bold text-sm">your top 3 common interests</div>
            <div className="flex mt-4 w-full">
              <div className="rounded-[50%] bg-red-200 w-12 h-12 mr-4">
                <div className="text-center m-auto pt-2.5">art</div>
              </div>
              <div className="rounded-[50%] bg-emerald-200 w-12 h-12  mr-4">
                <div className="text-center m-auto pt-2.5">art</div>
              </div>
              <div className="rounded-[50%] bg-violet-200 w-12 h-12 ">
                <div className="text-center m-auto pt-2.5">art</div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-sm">kirbo’s favourite music</div>
            <div className="w-full bg-gradient-to-r from-violet-200 to-cyan-200 rounded mt-4">
              <div className="m-auto text-center p-4 py-3">weezer</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ResultCard;
