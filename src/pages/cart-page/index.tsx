import { IndianRupee } from "lucide-react";
import Container from "../../components/shared/container";
import { useNavigate, useSearchParams } from "react-router-dom";
import CartPrices from "../../components/shared/cart-prices";
import { useState } from "react";
import { useDayRateStore } from "../../store/day-service-store";
import { useHourRateStore } from "../../store/hour-service-store";

const CartPage = () => {
  const [tipDayValue, setDayTipValue] = useState<number | string>("");
  const [tipHourValue, setHourTipValue] = useState<number | string>("");
  const { setTipPrice } = useDayRateStore();
  const { setHourTipPrice } = useHourRateStore();

  const navigation = useNavigate();

  const [searchParams] = useSearchParams();
  const mode = searchParams.get("service");

  const handleTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (mode === "day") {
      setDayTipValue(value ? Number(value) : "");
    } else {
      setHourTipValue(value ? Number(value) : "");
    }
  };

  const handleDayTipClick = () => {
    if (tipDayValue) {
      setTipPrice(Number(tipDayValue));
    }
  };

  const handleHourTipClick = () => {
    if (tipHourValue) {
      setHourTipPrice(Number(tipHourValue));
    }
  };

  return (
    <div className="min-h-[60vh]">
      <Container>
        <div className="rounded-md grid grid-cols-2 mb-[100px]">
          <div className="bg-white py-6 px-10">
            <h2 className="text-[20px] font-medium">Services detail</h2>
            <div className="mt-[50px] space-y-4">
              <div>
                <strong>Detail 1</strong>
                <p className="text-sm leading-7">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam vel tempore, corporis
                  similique doloribus iusto facere soluta beatae maxime itaque dicta amet labore tempora.
                </p>
              </div>
              <div>
                <strong>Detail 2</strong>
                <p className="text-sm leading-7">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit Voluptatem laboriosam vel tempore.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-[17px] font-medium">Payment offer</h3>
              <div className="space-y-2 mt-6">
                <p className="text-sm font-normal">Offer text</p>
                <p className="text-sm font-normal">Offer text</p>
                <p className="text-sm font-normal">Offer text</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <input type="checkbox" defaultChecked className="checkbox" />
              <p className="flex items-center text-[16px] gap-2">
                Pick & drop services free
                <s className="flex items-center text-[21px] italic">
                  <IndianRupee size={18} />
                  500
                </s>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-[17px] font-medium">Note</h3>
              <p className="text-xs leading-5 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugit aut aliquid voluptates placeat
                praesentium veritatis obcaecati, sunt illum! Facilis, veritatis. Magni quaerat corporis necessitatibus
                unde laboriosam quibusdam porro illum.
              </p>
            </div>
          </div>
          <div className="py-6 px-10">
            <CartPrices />
            <div className="mb-[60px]">
              <label htmlFor="" className="font-medium text-xs">
                Add tip
              </label>
              <p className="text-xs text-gray-600 italic mb-2">
                **Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eveniet ipsum hic necessitatibus, at
                voluptate soluta aliquam rerum commodi.
              </p>

              <div className="space-x-2">
                <input
                  value={mode === "day" ? tipDayValue : tipHourValue}
                  onChange={handleTipChange}
                  type="number"
                  placeholder="Add tip"
                  className="input input-xs input-bordered w-full max-w-[100px]"
                />
                <button
                  className="btn btn-primary btn-xs"
                  onClick={mode === "day" ? handleDayTipClick : handleHourTipClick}
                >
                  Apply
                </button>
              </div>
            </div>
            <button
              className="btn btn-primary w-full"
              onClick={() => navigation(`/service-letter?service=${mode === "day" ? "day" : "hour"}`)}
            >
              Proceed Now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
