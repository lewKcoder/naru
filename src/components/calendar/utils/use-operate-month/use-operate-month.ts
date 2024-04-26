import { useState } from "react";
import { Util } from "./types";
import { MonthAndYear } from "../../types";

export const useOperateMonth: Util = (props) => {
  const { thisMonth, thisYear } = props;

  const [calendarDate, setCalendarDate] = useState<MonthAndYear>({
    month: thisMonth,
    year: thisYear,
  });

  const previousMonth = () => {
    if (calendarDate.month === 1) {
      setCalendarDate((prev) => ({
        month: 12,
        year: prev.year - 1,
      }));
    } else {
      setCalendarDate((prev) => ({
        ...prev,
        month: prev.month - 1,
      }));
    }
  };

  const nextMonth = () => {
    if (calendarDate.month === 12) {
      setCalendarDate((prev) => ({
        month: 1,
        year: prev.year + 1,
      }));
    } else {
      setCalendarDate((prev) => ({
        ...prev,
        month: prev.month + 1,
      }));
    }
  };

  return { previousMonth, nextMonth, calendarDate, setCalendarDate };
};
