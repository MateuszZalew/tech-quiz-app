"use client";

import { useState } from "react";
import { Question, SubmittedAnswer } from "@/app/lib/definitions";
import CurrentQuestion from "./current-question";
import QuestionsList from "./questions-list";
import { generateAnswersArray } from "@/app/lib/utils";
import { useRouter } from "next/navigation";

export default function Quiz({ questions }: { questions: Question[] }) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [submittedAnswers, setSubmittedAnswers] = useState<SubmittedAnswer[]>(
    generateAnswersArray(questions.length)
  );
  const { question, answers } = questions[activeQuestionIndex];
  const { submittedAnswer } = submittedAnswers[activeQuestionIndex];
  const router = useRouter();

  const updateSubmittedAnswers = (newAnswer: string) => {
    const array = [...submittedAnswers];
    array[activeQuestionIndex].submittedAnswer = newAnswer;
    setSubmittedAnswers(array);
  };

  const changeCurrentQuestion = (id: number) => {
    setActiveQuestionIndex(id);
  };

  return (
    <main className="text-white pt-14 min-h-[450px] flex flex-col justify-between">
      <CurrentQuestion
        question={question}
        answers={answers}
        submittedAnswer={submittedAnswer}
        updateAnswers={updateSubmittedAnswers}
      />
      <QuestionsList
        questions={questions}
        activeQuestionIndex={activeQuestionIndex}
        submittedAnswers={submittedAnswers}
        changeCurrentQuestion={changeCurrentQuestion}
      />
      <div className="pt-10 flex justify-between">
        <button
          className="rounded-lg text-blue-500 bg-white px-8 py-2"
          onClick={() => router.push("/")}
        >
          Quit Quiz
        </button>

        <div className="flex justify-end gap-4">
          {activeQuestionIndex > 0 && (
            <button
              className="rounded-lg text-white bg-blue-500 px-4 py-2"
              onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
            >
              Previous question
            </button>
          )}

          <button
            className={`${
              activeQuestionIndex === questions.length - 1 ? "invisible" : ""
            } rounded-lg text-white bg-blue-500 px-4 py-2`}
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next question
          </button>
        </div>
      </div>
    </main>
  );
}
