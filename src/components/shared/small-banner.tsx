import { FC } from "react";

interface Props {
  title: string;
  content?: string;
  bgImage?: string;
}

const SmallBanner: FC<Props> = ({ title, content, bgImage = "/images/cutting.jpg" }) => {
  return (
    <header
      style={{ backgroundImage: `url(${bgImage})` }}
      className="hero min-h-[40vh] bg-base-200 bg-no-repeat bg-center bg-cover bg-fixed"
    >
      <div className="hero-content text-center">
        <div className="max-w-[650px] text-white">
          <h1 className="text-5xl font-bold leading-[52px]">{title}</h1>
          <p className="py-6 text-lg">{content}</p>
        </div>
      </div>
    </header>
  );
};

export default SmallBanner;
