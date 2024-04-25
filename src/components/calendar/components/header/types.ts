import { FunctionComponent } from "react";
import { MonthAndYear } from "../../types";

type Props = {
  thisMonth: number;
  thisYear: number;
  calendarDate: MonthAndYear;
  setCalendarDate: (
    arg: MonthAndYear | ((prevMonthAndYear: MonthAndYear) => MonthAndYear)
  ) => void;
  previousMonth: () => void;
  nextMonth: () => void;
};

export type Component = FunctionComponent<Props>;