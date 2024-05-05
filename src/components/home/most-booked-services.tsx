import VCard from "../shared/v-card";
import HeadingPrimary from "../typography/heading-primary";

const MostBookedServices = () => {
  return (
    <div className="container mx-auto px-4 my-[100px]">
      <div className="text-center">
        <HeadingPrimary className="mb-10">Most booked services</HeadingPrimary>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <VCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default MostBookedServices;
