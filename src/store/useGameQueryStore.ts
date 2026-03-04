import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  genreName?: string;
  platformId?: number;
  platformName?: string;
  sortOrder: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;

  setGenre: (id: number, name: string) => void;
  setPlatform: (id: number, name: string) => void;
  setSortOrder: (order: string) => void;
  setSearchText: (text?: string) => void;
  resetFilters: () => void;
}

export const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {
    sortOrder: "",
  },

  setGenre: (id, name) =>
    set((state) => ({
      gameQuery: {
        ...state.gameQuery,
        genreId: id,
        genreName: name,
      },
    })),

  setPlatform: (id, name) =>
    set((state) => ({
      gameQuery: {
        ...state.gameQuery,
        platformId: id,
        platformName: name,
      },
    })),

  setSortOrder: (order) =>
    set((state) => ({
      gameQuery: {
        ...state.gameQuery,
        sortOrder: order,
      },
    })),

  setSearchText: (text) =>
    set((state) => ({
      gameQuery: {
        ...state.gameQuery,
        searchText: text,
      },
    })),

  resetFilters: () =>
    set({
      gameQuery: {
        sortOrder: "",
      },
    }),
}));