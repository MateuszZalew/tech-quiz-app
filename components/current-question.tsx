type CurrentQuestionProps = {
  question: string;
  answers: {
    answer_a: string;
    answer_b: string;
    answer_c: string | null;
    answer_d: string | null;
    answer_e: string | null;
    answer_f: string | null;
  };
  submittedAnswer: string;
  updateAnswers: (newAnswer: string) => void;
};

export default function CurrentQuestion({
  question,
  answers,
  submittedAnswer,
  updateAnswers,
}: CurrentQuestionProps) {
  const { answer_a, answer_b, answer_c, answer_d, answer_e, answer_f } =
    answers;

  const setAnswer = (newAnswer: string) => {
    updateAnswers(newAnswer);
  };
  return (
    <>
      <h1 className="text-center text-4xl mb-6">{question}</h1>
      <div className="grid grid-cols-2 gap-4">
        <button
          className={`${
            submittedAnswer === "answer_a" ? "bg-green-500" : "bg-blue-400"
          } rounded-md px-6 py-2`}
          onClick={() => setAnswer("answer_a")}
        >
          <span className="text-amber-400">A:</span> {answer_a}
        </button>
        <button
          className={`${
            submittedAnswer === "answer_b" ? "bg-green-500" : "bg-blue-400"
          } rounded-md px-6 py-2`}
          onClick={() => setAnswer("answer_b")}
        >
          <span className="text-amber-400">B:</span> {answer_b}
        </button>
        {answer_c && (
          <button
            className={`${
              submittedAnswer === "answer_c" ? "bg-green-500" : "bg-blue-400"
            } rounded-md px-6 py-2`}
            onClick={() => setAnswer("answer_c")}
          >
            <span className="text-amber-400">C:</span> {answer_c}
          </button>
        )}
        {answer_d && (
          <button
            className={`${
              submittedAnswer === "answer_d" ? "bg-green-500" : "bg-blue-400"
            } rounded-md px-6 py-2`}
            onClick={() => setAnswer("answer_d")}
          >
            <span className="text-amber-400">D:</span> {answer_d}
          </button>
        )}
        {answer_e && (
          <button
            className={`${
              submittedAnswer === "answer_e" ? "bg-green-500" : "bg-blue-400"
            } rounded-md px-6 py-2`}
            onClick={() => setAnswer("answer_e")}
          >
            <span className="text-amber-400">E:</span> {answer_e}
          </button>
        )}
        {answer_f && (
          <button
            className={`${
              submittedAnswer === "answer_f" ? "bg-green-500" : "bg-blue-400"
            } rounded-md px-6 py-2`}
            onClick={() => setAnswer("answer_f")}
          >
            <span className="text-amber-400">F:</span> {answer_f}
          </button>
        )}
      </div>
    </>
  );
}
