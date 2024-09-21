import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/shared/container";
import ServicesCarouselCard from "../../components/shared/services-carousel-card";
import { IndianRupee } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "8-12 hours working man power",
  },
  {
    id: 2,
    title: "We deliver 3-5 working days",
  },
  {
    id: 3,
    title: "Higher worker for uoy long term construction work",
  },
  {
    id: 4,
    title: "8-12 hours working man power",
  },
  {
    id: 5,
    title: "8-12 hours working man power",
  },
  {
    id: 6,
    title: "We deliver 3-5 working days",
  },
  {
    id: 7,
    title: "Higher worker for uoy long term construction work",
  },
  {
    id: 8,
    title: "8-12 hours working man power",
  },
];
const InstantServices = () => {
  const navigation = useNavigate();

  return (
    <div>
      <Container className="my-10 min-h-[60vh]">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Instant Services</li>
          </ul>
        </div>
        <h2 className="text-[24px] font-semibold mb-6 mt-6">Instant Services</h2>
        <ServicesCarouselCard data={servicesData} />
        <div className="mt-10">
          <div role="tablist" className="tabs tabs-lifted">
            <input
              defaultChecked
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab font-semibold"
              aria-label="Day"
            />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <div className="flex justify-between items-center my-6">
                <div className="font-semibold">Meson</div>
                <div>800/day</div>
                <div className="flex items-center w-[180px]">
                  <button className="w-[50px] font-semibold">-</button>
                  <input type="number" value="1" className="input input-bordered input-xs w-full flex-1 text-center" />
                  <button className="w-[50px] font-semibold">+</button>
                </div>
                <div className="w-[120px]">
                  <input
                    type="number"
                    readOnly
                    value="800"
                    className="input input-bordered input-xs w-full text-center  font-medium"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center my-6">
                <div className="font-semibold">Helper</div>
                <div>600/day</div>
                <div className="flex items-center w-[180px]">
                  <button className="w-[50px] font-semibold">-</button>
                  <input type="number" value="1" className="input input-bordered input-xs w-full flex-1 text-center" />
                  <button className="w-[50px] font-semibold">+</button>
                </div>
                <div className="w-[120px]">
                  <input
                    type="number"
                    value="800"
                    readOnly
                    className="input input-bordered input-xs w-full text-center  font-medium"
                  />
                </div>
              </div>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab font-semibold" aria-label="Hours" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <div>
                <h3 className="font-semibold">Over Time</h3>
                <p>After 5 pm if you want these messo helpers to work overtime then then per hours rs will e chared.</p>
              </div>
              <div className="flex justify-between items-center my-6">
                <div className="font-semibold">Meson</div>
                <div>150/day</div>
                <div className="flex items-center w-[180px]">
                  <button className="w-[50px] font-semibold">-</button>
                  <input type="number" value="1" className="input input-bordered input-xs w-full flex-1 text-center" />
                  <button className="w-[50px] font-semibold">+</button>
                </div>
                <div className="w-[120px]">
                  <input
                    type="number"
                    readOnly
                    value="300"
                    className="input input-bordered input-xs w-full text-center  font-medium"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center my-6">
                <div className="font-semibold">Helper</div>
                <div>150/day</div>
                <div className="flex items-center w-[180px]">
                  <button className="w-[50px] font-semibold">-</button>
                  <input type="number" value="1" className="input input-bordered input-xs w-full flex-1 text-center" />
                  <button className="w-[50px] font-semibold">+</button>
                </div>
                <div className="w-[120px]">
                  <input
                    type="number"
                    value="300"
                    readOnly
                    className="input input-bordered input-xs w-full text-center font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-[50px] bg-gray-200 p-[50px] rounded-md">
          <div className="flex items-center gap-4">
            <p className="text-[32px]">Total Price:</p>
            <div className="flex items-center font-medium text-[32px]">
              <IndianRupee size={32} />
              <p>3000</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-[50px] mb-[100px]">
          <button className="btn btn-primary min-w-[300px]" onClick={() => navigation("/cart")}>
            View Cart
          </button>
        </div>
      </Container>
    </div>
  );
};

export default InstantServices;
