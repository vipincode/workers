import Container from "../../components/shared/container";
import Testimonials from "../../components/shared/testimonials";
import TextCard from "../../components/shared/text-card";

const AboutPage = () => {
  return (
    <div>
      <Container className="mt-10 mb-[100px] space-y-6">
        <div className="space-y-10">
          <div className="flex gap-6 items-center">
            <div className="w-[50%] p-10">
              <h2 className="text-3xl font-semibold mb-5">About Us</h2>
              <p className="leading-8 font-normal mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea
                iusto, laboriosam quos consequuntur corrupti enim laborum
              </p>
            </div>
            <div className="w-[50%] mt-16">
              <img src="/images/road.jpg" alt="" className="rounded-md" />
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="w-[50%] mt-10">
              <img src="/images/road.jpg" alt="" className="rounded-md" />
            </div>
            <div className="w-[50%] p-10">
              <h2 className="text-2xl font-semibold mb-5">Nice to meet you</h2>
              <p className="leading-8 font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea
                iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam,
                non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum
                repellendus aliquam ea iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta
                temporibus eaque dolore nam, non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <div className="w-[50%] p-10">
              <h2 className="text-2xl font-semibold mb-5 leading-9">
                Our Mission: Helping Millions of Organizations Grow Better
              </h2>
              <p className="leading-8 font-normal">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea
                iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam,
                non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. elit.
              </p>
            </div>
            <div className="w-[50%] mt-10">
              <img src="/images/one.jpg" alt="" className="rounded-md" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-6 items-center my-[80px]">
            <div className="w-[50%] mt-16">
              <img src="/images/road.jpg" alt="" className="rounded-md" />
            </div>
            <div className="w-[50%] p-10">
              <h2 className="text-2xl font-semibold mb-5">Our Story</h2>
              <p className="leading-8 font-normal mt-4">
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
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <TextCard key={item} />
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
