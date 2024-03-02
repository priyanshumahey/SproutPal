import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Result() {
  return (
    <div className="w-full">
      <div className="pt-24 text-3xl font-semibold text-center">
        we think you would get along with...
      </div>
      <Card className="w-[900px] p-8 m-auto my-8 flex">
        <div className="w-1/5">alsakls</div>
        <div className="w-4/5">
          <div className="flex">
            <div className="font-bold">Kirbo</div>
            <Progress className="m-auto mx-8" value={33} />
          </div>
          <div className="mt-4">discord</div>
          <div className="grid grid-cols-2 w-full mt-5">
            <div>
              <div className="font-bold text-sm">
                your top 3 common interests
              </div>
              <div className="flex mt-4 w-full">
                <div className="rounded-[50%] bg-orange-400 w-12 h-12 mr-4" />
                <div className="rounded-[50%] bg-orange-400 w-12 h-12  mr-4" />
                <div className="rounded-[50%] bg-orange-400 w-12 h-12 " />
              </div>
            </div>
            <div>
              <div className="font-bold text-sm">kirbo’s favourite music</div>
              <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded mt-4">
                <div className="m-auto text-center p-4 py-3">discord</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
