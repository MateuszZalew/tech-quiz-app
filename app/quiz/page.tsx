import Quiz from "@/components/quiz";
import { generateQuestions } from "../lib/actions";

export default async function Page({
  searchParams,
}: {
  searchParams: {
    category?: string;
    difficulty?: string;
    limit?: string;
  };
}) {
  const category = searchParams.category as string;
  const difficulty = searchParams.difficulty as string;
  const limit = searchParams.limit as string;
  const questions = await generateQuestions(category, difficulty, limit);

  return (
    <>
      <Quiz questions={questions} />
    </>
  );
}
