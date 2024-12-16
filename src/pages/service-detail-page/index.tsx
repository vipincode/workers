import { useNavigate, useParams } from "react-router-dom";
import ServiceDetailsCarousel from "../../components/services/details/service-details-carousel";
import Container from "../../components/shared/container";
import UserRatingCard from "../../components/shared/user-rating-card";
import DOMPurify from "dompurify";
import { useServiceDetail } from "../../react-query/hooks";

const ServicesDetailsPage = () => {
  const { slug } = useParams();
  const redirect = useNavigate();
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

  const { service } = serviceDetailData;

  return (
    <div>
      <div className="px-6 space-y-6 mb-6">
        {/* <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/service/${slug}`}>Listings</Link>
            </li>
            <li>Service detail</li>
          </ul>
        </div> */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">{service.title}</h2>
          <p className="mt-2">{service.short_description}</p>
        </div>
      </div>
      {service.slider_image.length > 0 ? (
        <ServiceDetailsCarousel data={service.slider_image} />
      ) : (
        <div className="!bg-gray-200 bg-no-repeat bg-cover bg-center h-[300px] flex justify-center items-center">
          <h3 className="text-2xl font-bold">Service Details</h3>
        </div>
      )}
      <Container className="mb-[80px]">
        <div className="my-8 flex gap-8 px-6">
          <div>
            <strong>Category:</strong>
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md ml-2">{service.category_name}</span>
          </div>
          <div>
            <strong>Tags:</strong>
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md ml-2">{service.tags}</span>
          </div>
        </div>
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
              <hr className="mb-6" />
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-6 mt-[60px]">Customer Reviews</h2>
              <hr className="mb-6" />
              <div className="space-y-6">
                <UserRatingCard reviews={service.reviews} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mt-[100px]">
                <button
                  onClick={() => redirect(`/permanent-service/${service.id}`)}
                  className="btn"
                  disabled={service.is_permanent_service < 1}
                >
                  Get permanent Service
                </button>
                <button
                  onClick={() => redirect(`/instant-service/${service.id}`)}
                  className="btn"
                  disabled={service.is_instant_service < 1}
                >
                  Get Instant Service
                </button>
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
