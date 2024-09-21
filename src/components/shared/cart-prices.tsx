import { IndianRupee } from "lucide-react";

const CartPrices = () => {
  return (
    <div>
      <h3 className="font-semibold">Days</h3>
      <div className="text-right divide-y">
        <p className="flex justify-between items-center text-sm gap-4 py-4">
          Services 1:
          <strong className="flex items-center gap-1">
            <IndianRupee size={14} /> 300
          </strong>
        </p>
        <p className="flex justify-between items-center text-sm gap-4 py-4">
          Services 2:
          <strong className="flex items-center gap-1">
            <IndianRupee size={14} /> 300
          </strong>
        </p>
        <p className="flex justify-between items-center text-sm gap-4 py-4">
          Services 3:
          <strong className="flex items-center gap-1">
            <IndianRupee size={14} /> 300
          </strong>
        </p>
        <p className="flex justify-between items-center text-sm gap-4 py-4">
          Services 4:
          <strong className="flex items-center gap-1">
            <IndianRupee size={14} /> 300
          </strong>
        </p>
        <p className="flex justify-between items-center text-base font-medium gap-4 py-6">
          Total:
          <strong className="flex items-center gap-1">
            <IndianRupee size={14} /> 1200
          </strong>
        </p>
      </div>
    </div>
  );
};

export default CartPrices;
