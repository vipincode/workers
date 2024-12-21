import Container from "../../components/shared/container";
import Testimonials from "../../components/shared/testimonials";
import TextCard from "../../components/shared/text-card";

const AboutPage = () => {
  return (
    <div>
      <Container className="mt-10 mb-[100px] space-y-6">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            <div className="w-full md:w-[50%] md:p-10">
              <h2 className="text-xl md:text-3xl font-semibold mb-3 md:mb-5">About Us</h2>
              <p className="text-sm md:font-base leading-8 font-normal mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea
                iusto, laboriosam quos consequuntur corrupti enim laborum
              </p>
            </div>
            <div className="w-full md:w-[50%] md:mt-16">
              <img src="/images/road.jpg" alt="" className="rounded-md" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            <div className="w-full md:w-[50%] mt-10">
              <img src="/images/road.jpg" alt="" className="rounded-md" />
            </div>
            <div className="w-full md:w-[50%] md:p-10">
              <h2 className="text-2xl font-semibold mb-5">Nice to meet you</h2>
              <p className="text-sm md:font-base leading-8 font-normal mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea
                iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam,
                non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum
                repellendus aliquam ea iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta
                temporibus eaque dolore nam, non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            <div className="w-full md:w-[50%] md:p-10">
              <h2 className="text-xl md:text-3xl font-semibold mb-3 md:mb-5">
                Our Mission: Helping Millions of Organizations Grow Better
              </h2>
              <p className="text-sm md:font-base leading-8 font-normal mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea
                iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam,
                non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. elit.
              </p>
            </div>
            <div className="w-full md:w-[50%] md:mt-10">
              <img src="/images/one.jpg" alt="" className="rounded-md" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row gap-6 md:items-center my-[80px]">
            <div className="w-full md:w-[50%] md:mt-16">
              <img src="/images/road.jpg" alt="" className="rounded-md" />
            </div>
            <div className="w-full md:w-[50%] md:p-10">
              <h2 className="text-xl md:text-3xl font-semibold mb-3 md:mb-5">Our Story</h2>
              <p className="text-sm md:font-base leading-8 font-normal mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea
                iusto, laboriosam quos consequuntur corrupti enim laborum
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[100px]">
            <h2 className="text-2xl font-semibold my-5 text-center">Why us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }, (_, index) => (
              <TextCard key={index} />
            ))}
          </div>
        </div>
        <div>
          <Testimonials />
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
