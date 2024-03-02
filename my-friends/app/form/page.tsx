"use client";

import FormPage from "@/components/ui/formPage";
import InputPage from "@/components/ui/inputPage";
import { useState } from "react";

export default function Form() {
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState({
      "name": "",
      "age": 0,
      "music": "",
      "free_days": {
          "monday": false,
          "tuesday": false,
          "wednesday": false,
          "thursday": false,
          "friday": false,
          "saturday": false,
          "sunday": false
      },
      "spirit_veg": "",
      "horoscope": "",
      "hobbies": "",
      "activities_dislike": "",
      "activities_interested": "",
      "discord": {
          "present": false,
          "username": ""
      }
  });

  const updateName = (name: string) => {
    setData((prev) => ({ ...prev, name }));
  }
  
  const updateAge = (age: number) => {
    setData((prev) => ({ ...prev, age }));
  }

  const updateMusic = (music: string) => {
    setData((prev) => ({ ...prev, music }));
  }

  const updateVegetable = (spirit_veg: string) => {
    setData((prev) => ({ ...prev, spirit_veg }));
  }
  
  const updateHoroscope = (horoscope: string) => {
    setData((prev) => ({ ...prev, horoscope }));
  }

  const updateHobbies = (hobbies: string) => {
    setData((prev) => ({ ...prev, hobbies }));
  }

  const updateActivitiesDislike = (activities_dislike: string) => {
    setData((prev) => ({ ...prev, activities_dislike }));
  }

  const updateActivitiesInterested = (activities_interested: string) => {
    setData((prev) => ({ ...prev, activities_interested }));
  }

  const updateDiscord = (discord: string) => {
    if (discord !== "") {
      setData((prev) => ({ ...prev, discord: { present: true, username: discord } }));
    } else {
      setData((prev) => ({ ...prev, discord: { present: false, username: "" } }));
    }
  }

  const renderFormPage = () => {
    if (progress === 0) {
      return (
        <FormPage
          question="what is your name?"
          placeholder="name"
          setProgress={setProgress}
          setValue={ updateName }
        />
      );
    } else if (progress === 1) {
      return (
        <FormPage
          question="hi! how old are you?"
          placeholder="age"
          setProgress={setProgress}
          setValue={ updateAge }
        />
      );
    } else if (progress === 2) {
      return (
        <FormPage
          question="what type of music do you listen to?"
          placeholder="genre; songs"
          setProgress={setProgress}
          setValue={ setData }
        />
      );
    } else if (progress === 3) {
      return (
        <InputPage
          question="when are you usually free to meet up, [name]?"
          setProgress={setProgress}
          setValue={ updateMusic }
        />
      );
    } else if (progress === 4) {
      return (
        <FormPage
          question="what is your spirit vegetable?"
          placeholder="genre; songs"
          setProgress={setProgress}
          setValue={ updateVegetable }
        />
      );
    } else if (progress === 5) {
      return (
        <FormPage
          question="nice choice! very healthy too. what is your horoscope?"
          placeholder="gemini"
          setProgress={setProgress}
          setValue={ updateHoroscope }
        />
      );
    } else if (progress === 6) {
      return (
        <FormPage
          question="are there any hobbies that you are passionate about?"
          setProgress={setProgress}
          setValue={ updateHobbies }
        />
      );
    } else if (progress === 7) {
      return (
        <FormPage
          question="nice choice! very healthy too. what is your horoscope?"
          placeholder="genre; songs"
          setProgress={setProgress}
          setValue={ updateHobbies }
        />
      );
    } else if (progress === 8) {
      return (
        <FormPage
          question="what are some activities you dislike or would never try?"
          setProgress={setProgress}
          setValue={ updateActivitiesDislike }
        />
      );
    } else if (progress === 9) {
      return (
        <FormPage
          question="are there any hobbies that you have been wanting to get into?"
          setProgress={setProgress}
          setValue={ updateActivitiesInterested }
        />
      );
    } else if (progress === 10) {
      return (
        <>
          {console.log(data)}
          <FormPage
            question="optional: Discord ID (if you would like to connect with your matches"
            setProgress={setProgress}
            setValue={ updateDiscord }
          />
        </>
      );
    }
  };
  return <>{renderFormPage()}</>;
}
