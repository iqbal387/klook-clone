import monthId from "@/data/id/month";
import monthEn from "@/data/en/month";

export const formatDate = (date: string, locale = "id") => {
  if (!date) return "-";

  const newDate = new Date(date);

  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();

  const { shortMonthList } = locale === "id" ? monthId : monthEn;

  return `${day} ${shortMonthList[month]} ${year}`;
};
