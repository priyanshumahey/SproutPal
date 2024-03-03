import React, { useState } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import sprout from "../../app/assets/mainsprout.jpg";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

const horoscopeSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

type FormPageProps = {
  question: string;
  placeholder?: string;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setValue?: any;
  progress?: number;
  submitForm?: () => void;
};

const FormPage: React.FC<FormPageProps> = ({
  question,
  placeholder,
  setProgress,
  setValue,
  progress,
  submitForm,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const router = useRouter();

  const renderInput = () => {
    if (progress === 5) {
      return (
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {horoscopeSigns.map((horoscope, i) => (
              <SelectItem value={horoscope} key={i}>
                {horoscope}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }
    return (
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    );
  };
  return (
    <main className="w-full h-full absolute top-0 left-0">
      <div className="pt-40 m-auto w-full">
        <Image className="m-auto" src={sprout} alt="profile" />
      </div>
      <div className="w-3/5 m-auto">
        <div className="pt-6 text-4xl font-semibold text-center">
          {question}
        </div>
        <div className="mt-8">{renderInput()}</div>
      </div>
      <div className="w-11/12 mt-64">
        <Button
          className="float-right"
          onClick={() => {
            if (progress === 9) {
              submitForm?.();
              router.push("/chat", { scroll: false });
            } else {
              setProgress?.((prev: number) => prev + 1);
              setInputValue("");
              setValue(inputValue);
            }
          }}
        >
          next
        </Button>
      </div>
    </main>
  );
};

export default FormPage;
