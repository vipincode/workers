import { twMerge } from "tailwind-merge";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const HeadingPrimary = ({ children, className }: HeadingProps) => {
  return <h2 className={twMerge("text-[42px] font-semibold mb-3", className)}>{children}</h2>;
};

export default HeadingPrimary;
