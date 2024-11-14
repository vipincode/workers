import Container from "./container";
import HeadingPrimary from "../typography/heading-primary";
import { useFetchPartners } from "../../react-query/hooks";
import { VITE_IMAGE_PATH_URL } from "../../react-query/constants";

const Partners = () => {
  const { data, isError, isLoading } = useFetchPartners();
  if (isError) {
    return <p>Oops something went wrong...</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Container className="mb-[100px]">
      <HeadingPrimary className="mb-10 text-center">Our partners</HeadingPrimary>
      <div className="grid grid-cols-4 gap-10">
        {data.partners.map((partner) => (
          <div className="w-full border flex justify-center items-center gap-5 py-6">
            <img
              className="w-[62px] h-[48px] object-cover rounded-md"
              src={`${VITE_IMAGE_PATH_URL}/partner/${partner.logo}`}
              alt=""
            />
            <h3>{partner.name}</h3>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Partners;
