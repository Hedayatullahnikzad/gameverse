import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <p>{error}</p>}
      <div>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
