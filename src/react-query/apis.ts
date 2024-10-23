import axios from "axios";
import { API_URL } from "./constants";
import { employeeFormData } from "../schema/permanent-service/schema";
import { stepFormDataType } from "../schema/step-form";
import { BlogProps, CategoriesProps, CateGoryApiResponse, FormInputs, InstantApiResponse, JobApiResponse, JobCategoryApiResponse, JobDetailApiResponse, ServicesProps, SingleBlogProps, SliderProps, SubCategoryProps } from "../types";

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

/**
 * @PermanentService
 * Post User Data
 */
export const postEmployeeData = async (data: employeeFormData) => {
  const response = await axios.post(`${API_URL}/save-query-permanent-service`, data);
  return response.data;
};

/**
 * @PermanentService
 * Post User Data
 */
export const stepFormeData = async (data: stepFormDataType) => {
  const response = await axios.post(`${API_URL}/join-us`, data);
  return response.data;
};

/**
 * @JobCategory
 * Post User Data
 */
export const jobsCategory = async () => {
  const response = await axios.get<CateGoryApiResponse>(`${API_URL}/get-jobs-category`);
  return response.data;
};

export const jobsCategoryBySlug = async (slug: string) => {
  const response = await axios.get<JobCategoryApiResponse>(`${API_URL}/get-job-category/${slug}`);
  return response.data;
};

export const jobs = async () => {
  const response = await axios.get<JobApiResponse>(`${API_URL}/get-jobs`);
  return response.data;
};

export const jobsBySlug = async (slug: string) => {
  if (!slug) {
    throw new Error("No slug provided");
  }
  const response = await axios.get<JobDetailApiResponse>(`${API_URL}/get-job-detail/${slug}`);
  return response.data;
};

/**
 * @Apply Job
 */

export const applyJob = async (data: FormInputs) => {
  const response = await axios.post(`${API_URL}/get-job-detail/save-apply-job`, data);
  return response.data;
};