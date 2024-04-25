import { MonthAndYear } from "../../types";

type Props = {
  calendarDate: MonthAndYear;
  setCalendarDate: (
    arg: MonthAndYear | ((prevMonthAndYear: MonthAndYear) => MonthAndYear)
  ) => void;
};

type ReturnType = {
  previousMonth: () => void;
  nextMonth: () => void;
};

export type Util = (args: Props) => ReturnType;
