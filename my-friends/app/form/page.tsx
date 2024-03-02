"use client";

import FormPage from "@/components/ui/formPage";
import { useState } from "react";

export default function form() {
  const [progress, setProgress] = useState(0);

  const renderFormPage = () => {
    if (progress === 0) {
      return (
        <FormPage
          question="what is your name?"
          placeholder="name"
          setProgress={setProgress}
        />
      );
    } else if (progress === 1) {
      return <FormPage question="hi! how old are you?" placeholder="age" />;
    } else if (progress === 2) {
      return (
        <FormPage
          question="what type of music do you listen to?"
          placeholder="genre; songs"
        />
      );
    } else if (progress === 3) {
      return (
        <FormPage
          question="what type of music do you listen to?"
          placeholder="genre; songs"
        />
      );
    } else if (progress === 4) {
      return (
        <FormPage
          question="what is your spirit vegetable?"
          placeholder="genre; songs"
        />
      );
    } else if (progress === 5) {
      return (
        <FormPage
          question="nice choice! very healthy too. what is your horoscope?"
          placeholder="gemini"
        />
      );
    } else if (progress === 6) {
      return (
        <FormPage question="are there any hobbies that you are passionate about?" />
      );
    } else if (progress === 7) {
      return (
        <FormPage
          question="nice choice! very healthy too. what is your horoscope?"
          placeholder="genre; songs"
        />
      );
    } else if (progress === 8) {
      return (
        <FormPage question="what are some activities you dislike or would never try?" />
      );
    } else if (progress === 9) {
      return (
        <FormPage question="are there any hobbies that you have been wanting to get into?" />
      );
    } else if (progress === 10) {
      return (
        <FormPage question="optional: Discord ID (if you would like to connect with your matches" />
      );
    }
  };
  return <>{renderFormPage()}</>;
}
