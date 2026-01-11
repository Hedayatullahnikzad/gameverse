interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color =
    score >= 75
      ? "bg-green-100 text-green-700"
      : score >= 60
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <span
      className={`inline-block px-2 text-[14px] font-semibold rounded ${color}`}
    >
      {score}
    </span>
  );
};

export default CriticScore;
