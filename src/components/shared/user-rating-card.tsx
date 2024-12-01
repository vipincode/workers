import { Review } from "../../types";
import Rating from "./ratings";

interface UserRatingCardProp {
  review: Review;
}

const UserRatingCard = ({ review }: UserRatingCardProp) => {
  return (
    <div className="flex gap-3">
      <div className="w-10 h-10 bg-black text-white rounded-full flex justify-center items-center text-lg font-medium uppercase">
        {review.name.slice(0, 1)}
      </div>
      <div>
        <div className="flex gap-5 items-center mb-3">
          <h3 className="text-base font-semibold">{review.name}</h3>
          <Rating rating={review.rating} />
        </div>
        <p className="text-sm leading-7">{review.review_comments}</p>
      </div>
    </div>
  );
};

export default UserRatingCard;
