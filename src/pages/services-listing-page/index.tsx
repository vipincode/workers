import ListingBanner from "../../components/services/listing-banner";
import ListingCard from "../../components/services/listing-card";
import ListingSideBar from "../../components/services/listing-sidebar";
import Container from "../../components/shared/container";
import SearchBox from "../../components/shared/search-box";

const ListingPage = () => {
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
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
          </div>
          <div className="w-[200px] px-6">Adds area</div>
        </div>
      </Container>
    </div>
  );
};

export default ListingPage;
