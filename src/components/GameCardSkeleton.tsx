// GameCardSkeleton.tsx
// Skeleton content only (container styles removed)

const GameCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Image skeleton — EXACT match */}
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700" />

      {/* Card body — EXACT match */}
      <div className="p-4 space-y-2">
        {/* Title skeleton — matches text-2xl height */}
        <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />

        {/* Platforms + CriticScore row — EXACT structure */}
        <div className="flex items-center justify-between">
          {/* Platform icons */}
          <div className="flex gap-2">
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded" />
          </div>

          {/* CriticScore badge */}
          <div className="h-6 w-10 bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
