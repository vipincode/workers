import { useSearchParams } from "react-router-dom";
import ListingBanner from "../../components/services/listing-banner";
import ListingCard from "../../components/services/listing-card";
import ListingSideBar from "../../components/services/listing-sidebar";
import Container from "../../components/shared/container";
import SearchBox from "../../components/shared/search-box";
import { useFetchServices } from "../../react-query/hooks";

const ListingPage = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category-id");

  const { data, isError, isLoading } = useFetchServices();

  if (isError) {
    return (
      <div>
        <p>Oops Something went wrong!</p>
        <p>Network error, please try again.</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <div className="my-6 mx-6">
          <div className="skeleton h-32 w-full"></div>
        </div>
        <Container className="my-[80px]">
          <div className="flex">
            <div className="w-[300px] sticky top-0 space-y-7">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-32 w-full"></div>
            </div>
            <div className="flex-1 px-6 space-y-5">
              <div>
                <div className="skeleton h-32 w-full"></div>
              </div>
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-32 w-full"></div>
            </div>
            <div className="w-[200px] px-6 space-y-6">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-32 w-full"></div>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  console.log(data);
  return (
    <div>
      <div>
        <ListingBanner />
      </div>
      <Container className="my-[80px]">
        <div className="flex">
          <div className="w-[300px] sticky top-0">
            <ListingSideBar categoryId={parseInt(categoryId)} />
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
