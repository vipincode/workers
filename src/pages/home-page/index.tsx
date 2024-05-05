import Hero from "../../components/home/hero";
import HomeServices from "../../components/home/home-services";
import MostBookedServices from "../../components/home/most-booked-services";
import WorkProcess from "../../components/home/work-process";
import Contact from "../../components/shared/contact";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <div className="container mx-auto px-4 my-[100px]">
        <HomeServices />
      </div>
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
