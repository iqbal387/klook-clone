import monthId from "@/data/id/month";
import monthEn from "@/data/en/month";

import dayId from "@/data/id/day";
import dayEn from "@/data/en/day";

export const formatDate = (date: string, locale = "id") => {
  if (!date) return "-";

  const newDate = new Date(date);

  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();

  const { shortMonthList } = locale === "id" ? monthId : monthEn;

  return `${day} ${shortMonthList[month]} ${year}`;
};

export const formatDateFromDate = (date: string, locale = "id") => {
  if (!date) return "-";

  const newDate = new Date(
    typeof date === "string" ? date.split(" ").join("T") : date
  );
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();

  const { shortMonthList } = locale === "id" ? monthId : monthEn;

  return `${day} ${shortMonthList[month]} ${year}`;
};

export const addDays = (date: string, days: number) => {
  const newDate = new Date(date);

  newDate.setDate(newDate.getDate() + days);

  return newDate;
};

export const handleRemainingTime = (date: string, t: any) => {
  const startDate = new Date();
  const endDate = new Date(date);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = endDate.getTime() - startDate.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays === 0
    ? t("today")
    : diffInDays < 0
    ? t("campaignEnds")
    : `${diffInDays} ${t("moreDay")}`;
};

export const formatTimer = (timer: number) => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer - minutes * 60;

  return `${minutes} : ${seconds}`;
};

export const formatFullDate = (
  date: string,
  locale = "id",
  isFullDate = true
) => {
  if (!date) return "-";

  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();
  const dayIndex = newDate.getDay();

  const { fullMonthList, shortMonthList } = locale === "id" ? monthId : monthEn;
  const { fullDayList, shortDayList } = locale === "id" ? dayId : dayEn;

  const monthList = isFullDate ? fullMonthList : shortMonthList;
  const dayList = isFullDate ? fullDayList : shortDayList;

  return `${dayList[dayIndex]}, ${day} ${monthList[month]} ${year}`;
};

export const formatTime = (date: string) => {
  if (!date) return "-";

  const newDate = new Date(date);
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();

  return `${hours}:${`${minutes}`?.length > 1 ? minutes : `0${minutes}`} WIB`;
};

export const countRangeDate = (date1: string, date2: string) => {
  const startDate: any = new Date(date1);
  const endDate: any = new Date(date2);

  const time = Math.abs(endDate - startDate) / 1000;

  return time;
};
