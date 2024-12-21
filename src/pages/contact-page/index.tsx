import Container from "../../components/shared/container";
import SmallBanner from "../../components/shared/small-banner";

const ContactUsPage = () => {
  return (
    <div>
      <SmallBanner
        bgImage="/images/road.jpg"
        title="Contact Us"
        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      />
      <Container className="my-10">
        <div className="flex flex-col md:flex-row gap-10 max-w-[800px] mx-auto mb-[100px]">
          <div className="w-full md:w-[70%]">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Drop us a line</h2>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block font-medium mb-1 text-sm" htmlFor="name">
                  Name
                </label>
                <input type="text" className="input input-bordered w-full input-md" />
              </div>
              <div>
                <label className="block font-medium mb-1 text-sm" htmlFor="name">
                  Email
                </label>
                <input type="text" className="input input-bordered w-full input-md" />
              </div>
              <div>
                <label className="block font-medium mb-1 text-sm" htmlFor="name">
                  Phone
                </label>
                <input type="text" className="input input-bordered w-full input-md" />
              </div>
              <div>
                <label className="block font-medium mb-1 text-sm" htmlFor="name">
                  Message
                </label>
                <textarea className="textarea textarea-bordered w-full"></textarea>
              </div>
              <button className="btn btn-primary w-full md:w-auto">Submit</button>
            </form>
          </div>
          <div className="w-full md:w-[30%]">
            <div className="mb-6">
              <h2 className="text-lg md:text-2xl font-semibold">Find our offices</h2>
              <address className="space-y-5 text-sm md:font-base">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <ul className="text-sm md:font-base space-y-4">
                  <li>
                    <b>Line 1:</b> Your address
                  </li>
                  <li>
                    <b>Line 2:</b> Your address
                  </li>
                  <li>
                    <b>Contact:</b> +91-90008780999
                  </li>
                  <li>
                    <b>Email:</b> email@mail.com
                  </li>
                </ul>
              </address>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsPage;
