import { MdOutlinePrecisionManufacturing } from "react-icons/md";

const ICONS = {
  MdOutlinePrecisionManufacturing,
};

const TextCard = ({ data }) => {
  const IconComponent = ICONS[data.icon];

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <div className="card-body items-center justify-center flex-col gap-2">
        {IconComponent && <IconComponent size={62} className="text-primary" />}
        <h2 className="text-sm font-normal md:text-base capitalize">{data.description}</h2>
      </div>
    </div>
  );
};

export default TextCard;
