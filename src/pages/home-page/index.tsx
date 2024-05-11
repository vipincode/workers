import Blogs from "../../components/home/blogs";
import Hero from "../../components/home/hero";
import HomeServices from "../../components/home/home-services";
import MostBookedServices from "../../components/home/most-booked-services";
import WorkProcess from "../../components/home/work-process";
import Container from "../../components/shared/container";
import Partners from "../../components/shared/partners";
import SearchBox from "../../components/shared/search-box";
import Testimonials from "../../components/shared/testimonials";

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
      <div>
        <Partners />
      </div>
      <div>
        <Blogs />
      </div>
      <div>
        <Testimonials />
      </div>
    </section>
  );
};

export default HomePage;
