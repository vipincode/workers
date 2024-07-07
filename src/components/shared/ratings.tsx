const Rating = () => {
  return (
    <div className="flex items-center">
      <div className="rating">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 rating-xs" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 rating-xs" defaultChecked />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 rating-xs" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 rating-xs" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 rating-xs" />
      </div>
      <p>(4.5)</p>
    </div>
  );
};

export default Rating;
