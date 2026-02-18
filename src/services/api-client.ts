import axios from "axios";

/* ======================
   Shared types
====================== */

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

/* ======================
   Axios instance
====================== */

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b17f5f6264cb4a4b9146077ba206619f",
  },
});

/* ======================
   Reusable API Client
====================== */

export class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(params?: Record<string, any>) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, { params })
      .then(res => res.data);
  }

  // ✅ Fetch single object (game by slug or id)
  get(idOrSlug: string | number) {
    return axiosInstance
      .get<T>(`${this.endpoint}/${idOrSlug}`)
      .then(res => res.data);
  }
}

export default axiosInstance;
