import usePlatform from "../hooks/usePlatform";
import type { GameQuery } from "../pages/MainLayout";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const heading = `${platform?.name ?? ""} ${
    gameQuery.genreName ?? ""
  } Games`.trim();

  return (
    <h1 className="text-4xl font-bold my-5 text-gray-900 dark:text-white">
      {heading || "Games"}
    </h1>
  );
};

export default GameHeading;
