import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  gameId: number;
}

const GameTrailers = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useGameTrailers(gameId);

  if (isLoading) {
    return <p className="mt-0 text-gray-500">Loading trailers...</p>;
  }

  if (error || !trailers || trailers.length === 0) {
    return null;
  }

  // ✅ Only take the first trailer
  const trailer = trailers[0];

  return (
    <div className="mt-0">
      <h2 className="text-2xl font-bold mb-4">Trailer</h2>

      <video
        controls
        poster={trailer.preview}
        className="w-full rounded-lg shadow-lg"
        src={trailer.data.max}
      />
    </div>
  );
};

export default GameTrailers;
