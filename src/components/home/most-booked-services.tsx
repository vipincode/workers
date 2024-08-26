import Container from "../shared/container";
import HeadingPrimary from "../typography/heading-primary";

const MostBookedServices = () => {
  return (
    <Container className="my-[100px]">
      <div className="text-center">
        <HeadingPrimary className="mb-10">Most booked services</HeadingPrimary>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>Most Booked services</div>
      </div>
    </Container>
  );
};

export default MostBookedServices;
