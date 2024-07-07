import Rating from "./ratings";

const UserRatingCard = () => {
  return (
    <div className="flex gap-3">
      <div className="avatar">
        <div className="w-16 h-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div>
        <div className="flex gap-5 items-center mb-3">
          <h3 className="text-base font-semibold">Helena jackson</h3>
          <Rating />
        </div>
        <p className="text-sm leading-7">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, commodi. Possimus fugiat aspernatur amet
          repellendus reiciendis.
        </p>
      </div>
    </div>
  );
};

export default UserRatingCard;
