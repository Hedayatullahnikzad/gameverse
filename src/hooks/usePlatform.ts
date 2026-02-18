import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
  const { data } = usePlatforms();

  const platforms = data?.results ?? [];

  return platforms.find((platform) => platform.id === platformId);
};

export default usePlatform;
