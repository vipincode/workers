import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const API_URL = import.meta.env.VITE_API_BASE_URL;
export const VITE_IMAGE_PATH_URL = import.meta.env.VITE_IMAGE_PATH_URL;

export function useCategories() {
  const fetchCategories = () => axios.get<CategoriesProps>(`${API_URL}/get-categories`).then((res) => res.data);
  return useQuery<CategoriesProps, Error>({
    queryKey: ["category"],
    queryFn: fetchCategories,
    staleTime: 10 * 1000,
  });
}
