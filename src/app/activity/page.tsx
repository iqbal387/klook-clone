import Container from "@/components/atoms/Container";
import ActivityCard from "@/components/molecules/ActivityCard";

import { activity } from "@/data/activity";

const Activity = () => (
  <section className="section overflow-x-hidden">
    <Container className="grid gap-8 md:gap-10">
      <h1 className="tracking-wide">Aktivitas terbaik</h1>

      <div className="flex justify-center flex-wrap md:grid md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {activity.map((item, index) => (
          <div
            key={`activity-${index}`}
            className="max-w-[19rem] md:min-w-0 md:max-w-none"
          >
            <ActivityCard {...item} />
          </div>
        ))}
      </div>

      <button className="py-[0.6rem] w-full max-w-xs mx-auto flex items-center justify-center gap-2 rounded-lg bg-primary-hover text-primary-main hover:bg-opacity-75">
        Load more
      </button>
    </Container>
  </section>
);

export default Activity;
