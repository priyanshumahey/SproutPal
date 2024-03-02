import React from "react";
import { Input } from "./input";
import { Button } from "./button";

type FormPageProps = {
  question: string;
  placeholder?: string;
  setProgress?: React.Dispatch<React.SetStateAction<number>>;
};

const FormPage: React.FC<FormPageProps> = ({
  question,
  placeholder,
  setProgress,
}) => {
  return (
    <main>
      <div className="w-3/5 m-auto">
        <div className="mt-56 text-4xl font-semibold text-center">
          {question}
        </div>
        <Input className="mt-8" placeholder={placeholder} />
      </div>
      <div className="w-11/12 mt-64">
        <Button
          className="float-right"
          onClick={() => setProgress?.((prev: number) => prev + 1)}
        >
          next
        </Button>
      </div>
    </main>
  );
};

export default FormPage;
