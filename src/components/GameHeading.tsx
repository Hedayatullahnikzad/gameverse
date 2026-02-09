import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platformName ?? ""} ${
    gameQuery.genreName ?? ""
  } Games`.trim();

  return (
    <h1 className="text-4xl font-bold my-5 text-gray-900 dark:text-white">
      {heading || "Games"}
    </h1>
  );
};

export default GameHeading;
