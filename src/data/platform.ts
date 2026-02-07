// src/data/platforms.ts

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const platforms: Platform[] = [
  { id: 1, name: "PC", slug: "pc" },
  { id: 2, name: "PlayStation", slug: "playstation" },
  { id: 3, name: "Xbox", slug: "xbox" },
  { id: 4, name: "iOS", slug: "ios" },
  { id: 8, name: "Android", slug: "android" },
  { id: 5, name: "Apple Macintosh", slug: "mac" },
  { id: 6, name: "Linux", slug: "linux" },
  { id: 7, name: "Nintendo", slug: "nintendo" },
  { id: 9, name: "Atari", slug: "atari" },
  { id: 11, name: "SEGA", slug: "sega" },
  { id: 14, name: "Web", slug: "web" },
];

export default platforms;
