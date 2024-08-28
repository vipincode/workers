import { Link } from "react-router-dom";
import React from "react";
import { VITE_IMAGE_PATH_URL } from "../../react-query/constants";

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  return (
    <>
      {data && (
        <Link
          to={`/blog/${data.id}`}
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row overflow-hidden"
        >
          <img
            className="object-cover w-full h-[200px] md:w-48 "
            src={`${VITE_IMAGE_PATH_URL}/blog/${data.blogimg}`}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-[24px] leading-[30px] font-semibold tracking-tight">{data.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.short_description}</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default BlogCard;
