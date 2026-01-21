import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <h1
      className="
        text-4xl
        font-bold
        my-5
        text-gray-900
        dark:text-white
      "
    >
      {heading}
    </h1>
  );
};

export default GameHeading;
