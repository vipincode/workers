import { Banknote, HandCoins, Landmark, Vault } from "lucide-react";
import Container from "./container";
import HeadingPrimary from "../typography/heading-primary";

const Partners = () => {
  return (
    <Container className="mb-[100px]">
      <HeadingPrimary className="mb-10">Our partners</HeadingPrimary>
      <div className="grid grid-cols-4 gap-10">
        <div className="w-full border flex justify-center items-center py-6">
          <Landmark size={62} className="text-gray-400" />
        </div>
        <div className="w-full border flex justify-center items-center py-6">
          <Vault size={62} className="text-gray-400" />
        </div>
        <div className="w-full border flex justify-center items-center py-6">
          <Banknote size={62} className="text-gray-400" />
        </div>
        <div className="w-full border flex justify-center items-center py-6">
          <HandCoins size={62} className="text-gray-400" />
        </div>
      </div>
    </Container>
  );
};

export default Partners;
