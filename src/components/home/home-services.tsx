import { BadgeCheck } from "lucide-react";
import VCard from "../shared/v-card";
import HeadingPrimary from "../typography/heading-primary";

const HomeServices = () => {
  return (
    <>
      <div className="text-center">
        <HeadingPrimary className="mb-6 mt-6">Our Services</HeadingPrimary>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <VCard key={item} />
        ))}
      </div>
      <div className="grid grid-cols-8 gap-[40px] items-center mt-[100px] pb-[100px]">
        <div className="col-span-5">
          <HeadingPrimary>How we work</HeadingPrimary>
          <p>
            DESIGN IS AT THE HEART OF EVERYTHING WE DO Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchange dtype and scrambled.
          </p>
          <ul className="space-y-6 mt-6">
            <li className="flex">
              <BadgeCheck className="text-secondary pr-2" size={32} />
              <span>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchange dtype and scrambled.
              </span>
            </li>
            <li className="flex">
              <BadgeCheck className="text-secondary pr-2" size={32} />
              <span>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchange dtype and scrambled.
              </span>
            </li>
            <li className="flex">
              <BadgeCheck className="text-secondary pr-2" size={32} />
              <span>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchange dtype and scrambled.
              </span>
            </li>
            <li className="flex">
              <BadgeCheck className="text-secondary pr-2" size={32} />
              <span>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchange dtype and scrambled.
              </span>
            </li>
          </ul>
        </div>
        <div className="col-span-3 ">
          <img src="/public/images/work.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeServices;