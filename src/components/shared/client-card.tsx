const ClientCard = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img src="/public/images/one.jpg" alt="" className="w-[120px] h-[120px] rounded-full block mb-5" />
      <article className="mb-10">
        <h3 className="text-base leading-5 font-semibold text-gray-400 mt-3">Husten game</h3>
        <small className="text-xs font-semibold text-gray-400 block mb-3">Company, CEO</small>
        <p className="text-sm font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, obcaecati in? Esse, ad! Provident nam, ad
          voluptas veritatis placeat doloremque animi illum. Excepturi, fugiat beatae ducimus odit voluptates velit ex.
        </p>
      </article>
    </div>
  );
};

export default ClientCard;
