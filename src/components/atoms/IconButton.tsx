import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const IconButton = ({ children, className }: Props) => (
  <button className={`icon-button ${className}`}>{children}</button>
);

export default IconButton;
