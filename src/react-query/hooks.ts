import { useQuery } from "@tanstack/react-query";
import { fetchBlog, fetchCategories, fetchServices, fetchSingleBlog, fetchSubCategories } from "./apis";

// Category
export function useCategories() {
  return useQuery<CategoriesProps, Error>({
    queryKey: ["category"],
    queryFn: fetchCategories,
    staleTime: 10 * 1000,
  });
}

export function useSubCategories(categoryId: number) {
  return useQuery<SubCategoryProps, Error>({
    queryKey: ["subCategory", categoryId],
    queryFn: async () => fetchSubCategories(categoryId),
  });
}

// Services
export function useServices() {
  return useQuery<ServicesProps, Error>({
    queryKey: ["services"],
    queryFn: fetchServices,
    staleTime: 10 * 1000,
  });
}

// Blogs
export function useBlogs() {
  return useQuery<BlogProps, Error>({
    queryKey: ["blogs"],
    queryFn: fetchBlog,
    staleTime: 10 * 1000,
  });
}

export function useSingleBlog(id: number) {
  return useQuery<SingleBlogProps, Error>({
    queryKey: ["single-blogs", id],
    queryFn: () => fetchSingleBlog(id),
  });
}
