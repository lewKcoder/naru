import { DatesObject } from "../../types";
import { Util } from "./types";

export const InitDates: Util = (props) => {
  const { month, year } = props;

  const dates: DatesObject = [];

  const daysInMonth = new Date(year, month, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    const weekday = date.getDay();
    dates.push({
      day,
      weekday,
      inThisMonth: true,
    });
  }

  const firstWeekday = dates[0].weekday;
  const lastWeekday = dates[dates.length - 1].weekday;

  if (firstWeekday !== 0) {
    const previousMonth = month === 0 ? 12 : month;
    const daysInPreviousMonth = new Date(year, previousMonth, 0).getDate();
    for (let i = 0; i < firstWeekday; i++) {
      dates.unshift({
        day: daysInPreviousMonth - i,
        weekday: i,
        inThisMonth: false,
      });
    }
  }

  if (lastWeekday !== 6) {
    for (let i = 1; i <= 6 - lastWeekday; i++) {
      dates.push({
        day: i,
        weekday: lastWeekday + i,
        inThisMonth: false,
      });
    }
  }

  return dates;
};
