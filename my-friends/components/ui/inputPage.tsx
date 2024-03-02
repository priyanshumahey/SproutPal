import React, { useState } from "react";
import { Button } from "./button";
import { Checkbox as ChakraCheckbox, ChakraProvider } from "@chakra-ui/react";

type InputPageProps = {
  question: string;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
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

const InputPage: React.FC<InputPageProps> = ({ question, setProgress }) => {
  return (
    <ChakraProvider>
      <main>
        <div className="w-3/5 m-auto">
          <div className="mt-48 text-4xl font-semibold text-center">
            {question}
          </div>
          <div className="mt-8">
            {daysOfWeek.map((day, i) => (
              <div className="flex mt-4" key={i}>
                <ChakraCheckbox />
                <div className="pl-4">{day}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-11/12 mt-20">
          <Button
            className="float-right"
            onClick={() => {
              setProgress?.((prev: number) => prev + 1);
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
