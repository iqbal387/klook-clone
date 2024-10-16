import { ChevronLeft, ChevronRight } from "react-iconly";

type Props = {
  activityHover: boolean;
  prev: string;
  next: string;
};

const buttonClassName =
  "z-10 absolute top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-10 text-neutral-100 shadow hover:bg-opacity-75";

const SwiperNavigation2 = ({ activityHover, prev, next }: Props) => (
  <>
    <button
      className={`left-2 ${buttonClassName} ${prev}`}
      style={{
        visibility: activityHover ? "visible" : "hidden",
      }}
    >
      <ChevronLeft size="small" stroke="bold" />
    </button>

    <button
      className={`right-2 ${buttonClassName} ${next}`}
      style={{
        visibility: activityHover ? "visible" : "hidden",
      }}
    >
      <ChevronRight size="small" stroke="bold" />
    </button>
  </>
);

export default SwiperNavigation2;
