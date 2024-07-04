import Container from "../../components/shared/container";
import SmallBanner from "../../components/shared/small-banner";

const FaqsPage = () => {
  return (
    <div>
      <SmallBanner
        bgImage="/images/road.jpg"
        title="FAQs"
        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      />
      <Container className="my-[50px]">
        <div className="max-w-[800px] px-6 mx-auto">
          <h2 className="text-3xl font-semibold mb-5 text-center">FAQs</h2>
          <p className="text-base font-normal leading-8 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa error dicta provident explicabo, similique
            voluptatibus officia! Eligendi ducimus vitae deserunt delectus aperiam dolor, dolorem doloribus ad quo
            perferendis illo ea?
          </p>
        </div>
        <div className="max-w-[800px] mx-auto my-[100px]">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others?</div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusantium nam, dicta nobis fuga saepe
                  expedita iste nisi iusto praesentium voluptas consequatur ex. Nemo similique ea assumenda eveniet? Ea,
                  molestias.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others?</div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusantium nam, dicta nobis fuga saepe
                  expedita iste nisi iusto praesentium voluptas consequatur ex. Nemo similique ea assumenda eveniet? Ea,
                  molestias.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">Click to open this one and close others?</div>
              <div className="collapse-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusantium nam, dicta nobis fuga saepe
                  expedita iste nisi iusto praesentium voluptas consequatur ex. Nemo similique ea assumenda eveniet? Ea,
                  molestias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FaqsPage;
