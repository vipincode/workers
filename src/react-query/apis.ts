import axios from "axios";
import { API_URL } from "./constants";

/**
 * @Categories
 * Get Categories data.
 */
export const fetchCategories = () => axios.get<CategoriesProps>(`${API_URL}/get-categories`).then((res) => res.data);

export const fetchSubCategories = (categoryId: number) =>
  axios.get<SubCategoryProps>(`${API_URL}/get-sub-category/${categoryId}`).then((res) => res.data);

/**
 * @Services
 * Get Services data.
 */

export const fetchServices = () => axios.get<ServicesProps>(`${API_URL}/get-services`).then((res) => res.data);

/**
 * @Blog
 * Get Blog data.
 */

export const fetchBlog = () => axios.get<BlogProps>(`${API_URL}/get-blogs`).then((res) => res.data);

export const fetchSingleBlog = (id: number) =>
  axios.get<SingleBlogProps>(`${API_URL}/get-blog/${id}`).then((res) => res.data);

/**
 * @HomeSlider
 * Get Slider data.
 */

export const fetchHeroCarousel = () => axios.get<SliderProps>(`${API_URL}/get-sliders`).then((res) => res.data);

/**
 * @InstantService
 * Get Slider data.
 */

export const fetchInstantService = (serviceId: number) =>
  axios.get<InstantApiResponse>(`${API_URL}/get-instant-service/${serviceId}`).then((res) => res.data);

export const fetchPermanentService = (serviceId: number) =>
  axios.get<InstantApiResponse>(`${API_URL}/get-permanent-service/${serviceId}`).then((res) => res.data);
