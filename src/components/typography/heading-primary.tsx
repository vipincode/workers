import { twMerge } from "tailwind-merge";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const HeadingPrimary = ({ children, className }: HeadingProps) => {
  return <h2 className={twMerge("text-[32px] font-semibold mb-2", className)}>{children}</h2>;
};

export default HeadingPrimary;
