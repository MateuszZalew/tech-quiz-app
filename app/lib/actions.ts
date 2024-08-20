"use server";

export const generateQuestions = async (
  category: string,
  difficulty: string,
  questionsNum: string
) => {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?category=${category}&difficulty=${difficulty}&limit=${questionsNum}`,
    {
      headers: {
        "X-Api-Key": "cUweC6m6rnA9KRM5bqXZlDbCjXtVM6vWonEdgttY",
      },
    }
  );

  if (!response.ok) {
    throw new Error("There was a problem generating questions");
  }

  const data = await response.json();
  return data;
};
