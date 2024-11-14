import ListingBanner from "../../components/services/listing-banner";
import ListingCard from "../../components/services/listing-card";
import ListingSideBar from "../../components/services/listing-sidebar";
import Container from "../../components/shared/container";
import SearchBox from "../../components/shared/search-box";
import { useFetchServices } from "../../react-query/hooks";

const ListingPage = () => {
  const { data, isError, isLoading } = useFetchServices();
  if (isError) {
    return <p>Oops Something went wrong!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(data);
  return (
    <div>
      <div>
        <ListingBanner />
      </div>
      <Container className="my-[80px]">
        <div className="flex">
          <div className="w-[200px] sticky top-0">
            <ListingSideBar />
          </div>
          <div className="flex-1 px-6 space-y-5">
            <div>
              <SearchBox />
            </div>
            {data.services.map((service) => (
              <ListingCard key={service.id} data={service} />
            ))}
          </div>
          <div className="w-[200px] px-6">Adds area</div>
        </div>
      </Container>
    </div>
  );
};

export default ListingPage;
