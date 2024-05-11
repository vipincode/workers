import Hero from "../../components/home/hero";
import HomeServices from "../../components/home/home-services";
import MostBookedServices from "../../components/home/most-booked-services";
import WorkProcess from "../../components/home/work-process";
import Contact from "../../components/shared/contact";
import Container from "../../components/shared/container";
import SearchBox from "../../components/shared/search-box";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <SearchBox />
      <Container className="my-[100px]">
        <HomeServices />
      </Container>
      <div>
        <WorkProcess />
      </div>
      <div>
        <MostBookedServices />
      </div>
      <div>
        <Contact />
      </div>
    </section>
  );
};

export default HomePage;
