/**
 * @type
 *  Categories Types
 */
interface Category {
  id: number;
  name: string;
  hindi_name: string | null;
  slug: string;
  parent_id: number;
  description: string;
  cat_img: string;
  image_link: string | null;
  meta_title: string | null;
  meta_keyword: string | null;
  meta_description: string | null;
  status: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

// Type for the response data
interface CategoriesProps {
  categories: Category[];
}

// Type for the category card
interface CategoryCardProps {
  category: Category;
}

interface SubCategory {
  id: number;
  name: string;
  hindi_name: string | null;
  slug: string;
  parent_id: number;
  description: string;
  cat_img: string;
  image_link: string | null;
  meta_title: string | null;
  meta_keyword: string | null;
  meta_description: string | null;
  status: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

interface SubCategoryProps {
  sub_category: SubCategory[];
}
interface SubCategoryCardProps {
  data: SubCategory;
}

/**
 * @type
 *  Services Types
 */
interface Services {
  id: number;
  user_id: number;
  category_id: number;
  meta_title: string | null;
  meta_keyword: string | null;
  meta_description: string | null;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  tags: string;
  primary_image: string;
  image_link: string | null;
  video_link: string | null;
  status: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

interface ServicesProps {
  services: Services[];
}
interface ServicesCardProps {
  data: Services;
}

/**
 * @type
 *  Blog Types
 */

interface Blog {
  id: number;
  category_id: number | null;
  meta_title: string;
  meta_keyword: string;
  meta_description: string;
  title: string;
  slug: string;
  short_description: string;
  description: string;
  tags: string | null;
  blogimg: string;
  image_link: string;
  status: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

interface BlogProps {
  blogs: Blog[];
}
interface SingleBlogProps {
  blog: Blog;
}

interface BlogCardProps {
  data: Blog;
}

/**
 * @type
 *  Slider Types
 */

interface Slider {
  id: number;
  category_id: number;
  title: string;
  tagline: string;
  rlink: string | null;
  slider_img: string;
  status: string;
  slider_page: string | null;
  image_link: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

interface SliderProps {
  sliders: Slider[];
}

/**
 * @Instant Services
 */

interface InstantService {
  id: number;
  service_id: number;
  per_day_meason_rate: number;
  per_day_helper_rate: number;
  per_day: number;
  per_hour_meason_rate: number;
  per_hour_helper_rate: number;
  per_hour: number;
  overtime_meason_rate: number;
  overtime_helper_rate: number;
  overtime_per_hour: number;
  includes_instument: string;
  excludes_instument: string;
  labour_chowk_id: string[];
  created_at: string;
  updated_at: string;
}

interface InstantServiceSliderSlogan {
  id: number;
  category_id: number;
  slogan: string;
  slogan_image: string;
  service_type: string;
  status: string;
  ref_link: string;
  slogan_image_link: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

interface InstantApiResponse {
  instant_service: InstantService;
  slider_slogans: SliderSlogan[];
}
