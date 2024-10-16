import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => (
  <div
    className={`w-full max-w-[100rem] mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-20 2xl:px-0 ${className}`}
  >
    {children}
  </div>
);

export default Container;
