"use client";
import React, { useEffect, useState } from "react";

const Reply = () => {
  const [text, setText] = useState("");
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
        setText(data.summary);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div className="font-bold text-center py-24 text-2xl">{text}</div>;
};

export default Reply;
