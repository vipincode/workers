import Container from "../shared/container";
import VCard from "../shared/v-card";
import HeadingPrimary from "../typography/heading-primary";

const MostBookedServices = () => {
  return (
    <Container className="my-[100px]">
      <div className="text-center">
        <HeadingPrimary className="mb-10">Most booked services</HeadingPrimary>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <VCard key={item} />
        ))}
      </div>
    </Container>
  );
};

export default MostBookedServices;
