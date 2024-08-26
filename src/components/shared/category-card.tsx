import { VITE_IMAGE_PATH_URL } from "../../react-query/constants";
import ServicesModal from "./modals";
import React, { useRef, useState } from "react";
import ServicesListingCard from "../services/servies-listing-card";

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const handleActiveModal = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
    modalRef.current?.showModal();
  };

  return (
    <>
      {category && (
        <div
          className="bg-white rounded-md overflow-hidden  cursor-pointer"
          onClick={() => handleActiveModal(category.parent_id)}
        >
          <img
            className="h-[140px] w-full bg-cover"
            src={`${VITE_IMAGE_PATH_URL}/category/${category.cat_img}`}
            alt={category.slug}
          />
          <div className="p-4">
            <h3 className="text-base font-semibold mb-2">{category.name}</h3>
            <p className="text-sm">{category.description}</p>
          </div>
        </div>
      )}

      {/* Modals */}
      <ServicesModal ref={modalRef} title="Sub Category Popup!">
        {selectedCategoryId !== null && <ServicesListingCard categoryId={selectedCategoryId} />}
      </ServicesModal>
    </>
  );
};

export default CategoryCard;
