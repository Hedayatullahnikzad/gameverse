import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <div
      className="
        min-h-[336px]
        rounded-xl
        overflow-hidden
        shadow-md
        bg-white
        dark:bg-gray-800
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-1
        hover:scale-[1.02]
      "
    >
      {children}
    </div>
  );
};

export default GameCardContainer;
