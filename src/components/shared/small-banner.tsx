import { FC } from "react";

interface Props {
  title: string;
  content?: string;
}

const SmallBanner: FC<Props> = ({ title, content }) => {
  return (
    <header
      style={{ backgroundImage: `url("/images/cutting.jpg")` }}
      className="hero min-h-[50vh] bg-base-200 bg-no-repeat bg-center bg-cover bg-fixed"
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
