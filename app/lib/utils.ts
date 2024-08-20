export const categories = [
  { id: 1, name: "Linux" },
  { id: 2, name: "Code" },
  { id: 3, name: "SQL" },
  { id: 4, name: "Docker" },
  { id: 5, name: "CMS" },
  { id: 6, name: "DevOps" },
];

export const generateAnswersArray = (length: number) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push({ id: i, submittedAnswer: "" });
  }
  return array;
};
