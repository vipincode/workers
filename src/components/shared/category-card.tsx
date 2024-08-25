const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="p-4 bg-white rounded-md">
      <img src={category.cat_img} alt={category.slug} />
      <h3 className="text-base font-semibold mb-2">{category.name}</h3>
      <p className="text-sm">{category.description}</p>
    </div>
  );
};

export default CategoryCard;
