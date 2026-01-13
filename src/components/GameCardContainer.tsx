// GameCardContainer.tsx
// Reusable container for both GameCard and GameCardSkeleton

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
      "
    >
      {children}
    </div>
  );
};

export default GameCardContainer;
