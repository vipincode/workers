import { Review } from "../../types";
import Rating from "./ratings";
import { FaCircleUser } from "react-icons/fa6";

interface UserRatingCardProp {
  review: Review;
}

const UserRatingCard = ({ review }: UserRatingCardProp) => {
  return (
    <div className="flex gap-3">
      <div className="avatar">
        <div className="w-16 h-16">
          <FaCircleUser size={52} />
        </div>
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
