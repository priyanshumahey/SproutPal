import React from "react";
import { Button } from "./button";
import { Checkbox as ChakraCheckbox, ChakraProvider } from "@chakra-ui/react";
import sprout from "../../app/assets/mainsprout.jpg";
import Image from "next/image";

type InputPageProps = {
  question: string;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setValue?: any;
};

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const data = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
};

const InputPage: React.FC<InputPageProps> = ({
  question,
  setProgress,
  setValue,
}) => {
  return (
    <ChakraProvider>
      <main>
        <div className="pt-32 m-auto w-full">
          <Image className="m-auto" src={sprout} alt="profile" />
        </div>
        <div className="w-3/5 m-auto">
          <div className="mt-8 text-4xl font-semibold text-center">
            {question}
          </div>
          <div className="mt-8">
            {daysOfWeek.map((day, i) => (
              <div className="flex mt-4" key={i}>
                <ChakraCheckbox
                  onChange={(e) => {
                    data[day.toLowerCase() as keyof typeof data] =
                      e.target.checked;
                  }}
                />
                <div className="pl-4">{day}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-11/12 mt-12">
          <Button
            className="float-right"
            onClick={() => {
              setProgress?.((prev: number) => prev + 1);
              setValue(data);
              console.log(data);
            }}
          >
            next
          </Button>
        </div>
      </main>
    </ChakraProvider>
  );
};

export default InputPage;
