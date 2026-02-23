import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useGameScreenshots(gameId);

  if (isLoading) {
    return <p className="mt-12 text-gray-500">Loading screenshots...</p>;
  }

  if (error || !screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Screenshots</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {screenshots.map((screenshot) => (
          <img
            key={screenshot.id}
            src={screenshot.image}
            alt="Game screenshot"
            className="w-full rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-200"
          />
        ))}
      </div>
    </div>
  );
};

export default GameScreenshots;
