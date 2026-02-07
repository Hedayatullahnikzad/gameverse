// src/services/platformService.ts
import apiClient from "./api-client";
import type { Platform } from "../data/platform";


interface FetchResponse<T> {
  results: T[];
}

const platformService = {
  getAll: () =>
    apiClient
      .get<FetchResponse<Platform>>("/platforms/lists/parents")
      .then(res => res.data),
};

export default platformService;
