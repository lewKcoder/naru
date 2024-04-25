import { Util } from "./types";

export const OperateMonth: Util = (props) => {
  const { calendarDate, setCalendarDate } = props;

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

  return { previousMonth, nextMonth };
};
