"use client";
import React, { useEffect, useState } from "react";
import ResultCard from "@/components/ui/resultcard";

export default function Result() {
  const [topMatched, setTopMatched] = useState([]);

  useEffect(() => {
    fetch("/getLLM", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("llm fetch", data);
        setTopMatched(data.top_k);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-full">
      <div className="pt-24 text-3xl font-semibold text-center">
        your top friend matches
      </div>
      <div className="w-full grid grid-cols-1 mt-8 mb-16">
        {topMatched.map((d, i) => (
          <div className="flex m-auto">
            <div className="font-bold mr-8 font-3xl">{`${i + 1}.`}</div>
            <ResultCard name={d} />
          </div>
        ))}
      </div>
    </div>
  );
}
