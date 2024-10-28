import { useEffect, useState } from "react";
import { ConsultationAnswers } from "../requests/types";
import { PostConsultationAnswers } from "../requests/requests";

export const useContent = () => {
  const [visibleQuestion, setVisibleQuestion] = useState(0);
  const [answers, setAnswers] = useState<ConsultationAnswers>({
    valid_age: false,
    likes_fruit: false,
    previous_allergy: false,
    allergy_medication: false,
    other_medication: false,
  });

  const questions = [
    {
      text: "Are you aged between 0 and 100?",
      key: "valid_age",
    },
    {
      text: "Do you like eating fruit?",
      key: "likes_fruit",
    },
    {
      text: "Have you ever had an allergic reaction to the Genovian pear?",
      key: "previous_allergy",
    },
    {
      text: "Are you currently taking any allergy medication?",
      key: "allergy_medication",
    },
    {
      text: "Are you currently taking any other medication?",
      key: "other_medication",
    },
  ];

  useEffect(() => {
    if (visibleQuestion > questions.length - 1)
      PostConsultationAnswers(answers);
  }, [answers, visibleQuestion]);

  const incrementVisibleQuestion = () => {
    setVisibleQuestion((prev) => prev + 1);
  };

  const updateAnswers = (key: string, value: boolean) => {
    setAnswers((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return {
    updateAnswers,
    incrementVisibleQuestion,
    visibleQuestion,
    questions,
  };
};
