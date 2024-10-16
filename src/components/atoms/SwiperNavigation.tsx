import { ChevronLeft, ChevronRight } from "react-iconly";
import IconButton from "./IconButton";

type Props = {
  prev: string;
  next: string;
};

const SwiperNavigation = ({ prev, next }: Props) => (
  <>
    <IconButton
      className={`z-10 absolute top-1/2 -translate-y-1/2 left-4 sm:-left-6 xl:-left-14 ${prev}`}
    >
      <ChevronLeft size="medium" />
    </IconButton>

    <IconButton
      className={`z-10 absolute top-1/2 -translate-y-1/2 right-4 sm:-right-6 xl:-right-14 ${next}`}
    >
      <ChevronRight size="medium" />
    </IconButton>
  </>
);

export default SwiperNavigation;
