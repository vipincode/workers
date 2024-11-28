import { Link, useParams } from "react-router-dom";
import ServiceDetailsCarousel from "../../components/services/details/service-details-carousel";
import Container from "../../components/shared/container";
import UserRatingCard from "../../components/shared/user-rating-card";
import DOMPurify from "dompurify";
import { useServiceDetail } from "../../react-query/hooks";

const ServicesDetailsPage = () => {
  const { slug } = useParams();
  const { data: serviceDetailData, isLoading, isError } = useServiceDetail(slug);

  if (isError) return <p>Error</p>;
  if (isLoading)
    return (
      <div className="space-y-6 mb-10">
        <div className="skeleton h-[300px] w-full rounded-none" />
        <div className="space-y-6 container mx-auto px-4">
          <div className="skeleton h-[32px] w-[30%]" />
          <div className="skeleton h-[32px] w-[40%]" />
          <div className="skeleton h-[32px] w-[60%]" />
          <div className="skeleton h-[32px] w-[70%]" />
          <div className="skeleton h-[32px] w-full" />
          <div className="skeleton h-[32px] w-full" />
          <div className="skeleton h-[32px] w-full" />
          <div className="skeleton h-[32px] w-full" />
          <div className="skeleton h-[32px] w-full" />
        </div>
        <div className="space-y-6 container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full" />
            <div className="flex flex-col gap-4 flex-1">
              <div className="skeleton h-4 w-[60%]" />
              <div className="skeleton h-4 w-[70%]" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full" />
            <div className="flex flex-col gap-4 flex-1">
              <div className="skeleton h-4 w-[60%]" />
              <div className="skeleton h-4 w-[70%]" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full" />
            <div className="flex flex-col gap-4 flex-1">
              <div className="skeleton h-4 w-[60%]" />
              <div className="skeleton h-4 w-[70%]" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="skeleton h-16 w-16 shrink-0 rounded-full" />
            <div className="flex flex-col gap-4 flex-1">
              <div className="skeleton h-4 w-[60%]" />
              <div className="skeleton h-4 w-[70%]" />
            </div>
          </div>
        </div>
      </div>
    );

  const { service, slider_slogans } = serviceDetailData;
  return (
    <div>
      <div className="px-6 space-y-6 mb-10">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service-listing">Listings</Link>
            </li>
            <li>Service detail</li>
          </ul>
        </div>
        <h2 className="text-2xl font-semibold">{service.title}</h2>
      </div>
      <ServiceDetailsCarousel data={slider_slogans} />
      <Container className="my-[80px]">
        <div className="flex gap-6">
          <div className="flex-1 px-6 space-y-6">
            <div>
              <h2 className="font-semibold text-lg">Description</h2>
              <div
                className="mt-10"
                dangerouslySetInnerHTML={{
                  __html: service.description ? DOMPurify.sanitize(service.description) : "<p>No content available</p>",
                }}
              />
            </div>
            <div>
              {/* <h2 className="font-semibold text-lg mb-3 mt-10">Notes:</h2> */}
              <hr className="mb-6" />
              {/* <div className="space-y-5">
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
              </div> */}
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-6 mt-[60px]">Customer Reviews</h2>
              <hr className="mb-6" />
              <div className="space-y-6">
                {service.reviews?.map((review) => (
                  <UserRatingCard review={review} />
                ))}
              </div>
              <div className="my-[60px] flex justify-center items-center">
                <button className="btn btn-link">View all Reviews</button>
              </div>
            </div>
            <div>
              <div className="flex justify-between mt-[100px]">
                <Link to={`/permanent-service/${service.id}`}>
                  <button className="btn" disabled={service.is_permanent_service < 1}>
                    Get permanent Service
                  </button>
                </Link>
                <Link to={`/instant-service/${service.id}`}>
                  <button className="btn" disabled={service.is_instant_service < 1}>
                    Get Instant Service
                  </button>
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
