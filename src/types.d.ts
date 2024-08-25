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

/**
 * @type
 *  Services Types
 */
