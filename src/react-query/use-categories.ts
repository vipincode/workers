import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useCategories() {
  const fetchCategories = () =>
    axios.get<CategoriesProps>("https://dehatwala.com/api/get-categories").then((res) => res.data);
  return useQuery<CategoriesProps, Error>({
    queryKey: ["category"],
    queryFn: fetchCategories,
    staleTime: 10 * 1000,
  });
}
