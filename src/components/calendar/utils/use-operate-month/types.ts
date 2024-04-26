import { MonthAndYear } from "../../types";

type Props = {
  thisMonth: number;
  thisYear: number;
};

type ReturnType = {
  calendarDate: MonthAndYear;
  setCalendarDate: (arg: MonthAndYear) => void;
  previousMonth: () => void;
  nextMonth: () => void;
};

export type Util = (args: Props) => ReturnType;
