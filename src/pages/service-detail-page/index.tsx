import { Link } from "react-router-dom";
import ServiceDetailsCarousel from "../../components/services/details/service-details-carousel";
import Container from "../../components/shared/container";
import UserRatingCard from "../../components/shared/user-rating-card";

const ServicesDetailsPage = () => {
  return (
    <div>
      <div className="px-6 space-y-6 mb-10">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services-listing">Listings</Link>
            </li>
            <li>Services details</li>
          </ul>
        </div>
        <h2 className="text-2xl font-semibold">
          Est incidunt saepe ipsa maxime doloribus ullam quisquam earum odit nemo
        </h2>
      </div>
      <ServiceDetailsCarousel />
      <Container className="my-[80px]">
        <div className="flex gap-6">
          <div className="flex-1 px-6 space-y-6">
            <div>
              <h2 className="font-semibold text-lg">Description</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est incidunt saepe ipsa maxime doloribus ullam
                quisquam earum odit nemo libero, reiciendis dicta consequatur esse facilis iusto tempore similique quis
                tempora.
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-3 mt-10">Notes:</h2>
              <hr className="mb-6" />
              <div className="space-y-5">
                <div>
                  <h3 className="text-base font-semibold">Note title</h3>
                  <p className="text-sm leading-6">
                    Notes description lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold">Note title</h3>
                  <p className="text-sm leading-6">
                    Notes description lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold">Note title</h3>
                  <p className="text-sm leading-6">
                    Notes description lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-6 mt-[60px]">Customer Reviews</h2>
              <hr className="mb-6" />
              <div className="space-y-6">
                <UserRatingCard />
                <UserRatingCard />
                <UserRatingCard />
                <UserRatingCard />
              </div>
              <div className="my-[60px] flex justify-center items-center">
                <button className="btn btn-link">View all Reviews</button>
              </div>
            </div>
            <div>
              <div className="flex justify-between mt-[100px]">
                <Link to="/permanent-services">
                  <button className="btn">Get permanent Service</button>
                </Link>
                <Link to="/instant-services">
                  <button className="btn">Get Instan t Service</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[210px]">Ads Area</div>
        </div>
      </Container>
    </div>
  );
};

export default ServicesDetailsPage;
