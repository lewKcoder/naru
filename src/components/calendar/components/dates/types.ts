import { FunctionComponent } from "react";
import { DatesObject, MonthAndYear } from "../../types";

type Props = {
  dates: DatesObject;
  dateRaw: Date;
  thisMonth: number;
  thisYear: number;
  calendarDate: MonthAndYear;
};

export type Component = FunctionComponent<Props>;
