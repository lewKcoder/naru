import { FunctionComponent } from "react";

export type DatesObject = {
  day: number;
  weekday: number;
  inThisMonth: boolean;
}[];

export type MonthAndYear = {
  month: number;
  year: number;
};

export type FullDate = MonthAndYear & {
  day: number;
};

export type Component = FunctionComponent;
