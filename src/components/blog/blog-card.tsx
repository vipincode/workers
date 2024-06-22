const BlogCard = () => {
  return (
    <div className="flex bg-white h-[110px]">
      <div className="w-[140px] h-full">
        <img className="h-[110px]" src="/images/cutting-1.jpg" alt="" />
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-sm font-semibold mb-2">Lorem ipsum dolor sit amet</h3>
        <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatum porro.</p>
      </div>
    </div>
  );
};

export default BlogCard;
