import usePlatform from "../hooks/usePlatform";
import { useGameQueryStore } from "../store/useGameQueryStore";

const GameHeading = () => {
  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);

  const genreName = useGameQueryStore((state) => state.gameQuery.genreName);

  const platform = usePlatform(platformId);

  const heading = `${platform?.name ?? ""} ${genreName ?? ""} Games`.trim();

  return (
    <h1 className="text-4xl font-bold my-5 text-gray-900 dark:text-white">
      {heading || "Games"}
    </h1>
  );
};

export default GameHeading;
