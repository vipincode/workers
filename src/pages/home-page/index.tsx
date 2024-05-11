import Blogs from "../../components/home/blogs";
import Hero from "../../components/home/hero";
import HomeServices from "../../components/home/home-services";
import MostBookedServices from "../../components/home/most-booked-services";
import WorkProcess from "../../components/home/work-process";
import Container from "../../components/shared/container";
import SearchBox from "../../components/shared/search-box";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <SearchBox />
      <Container>
        <HomeServices />
      </Container>
      <div>
        <WorkProcess />
      </div>
      <div>
        <MostBookedServices />
      </div>
      <div>Our Partners</div>
      <div>
        <Blogs />
      </div>
    </section>
  );
};

export default HomePage;
