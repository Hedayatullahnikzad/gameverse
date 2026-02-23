import type { Platform } from "./Platform";
import type { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;

  parent_platforms: { platform: Platform }[];

  metacritic: number;

  genres: { id: number; name: string }[];   // ✅ added
  publishers: Publisher[];                  // ✅ added
}