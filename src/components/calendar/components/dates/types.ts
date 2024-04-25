import { FunctionComponent } from "react";
import { DatesObject, FullDate, MonthAndYear } from "../../types";

type Props = {
  dates: DatesObject;
  dateRaw: Date;
  thisMonth: number;
  thisYear: number;
  calendarDate: MonthAndYear;
  selectedDate: FullDate;
  setSelectedDate: (arg: FullDate) => void;
};

export type Component = FunctionComponent<Props>;
