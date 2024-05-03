import { ArrowIcon } from "../arrow-icon";
import { Component } from "./types";

export const Header: Component = (props) => {
  const {
    thisMonth,
    thisYear,
    calendarDate,
    setCalendarDate,
    previousMonth,
    nextMonth,
  } = props;

  return (
    <div className="grid gap-4 grid-flow-col grid-cols-[1fr_auto] font-medium">
      <span className="text-base font-medium tracking-wide">
        {calendarDate.year}年{calendarDate.month}月
      </span>

      <div className="grid items-center grid-flow-col gap-8">
        <button onClick={previousMonth}>
          <ArrowIcon svgPath="M9 17L1 9L9 1" />
        </button>

        <button
          onClick={() => setCalendarDate({ month: thisMonth, year: thisYear })}
        >
          今日
        </button>

        <button onClick={nextMonth}>
          <ArrowIcon svgPath="M1 17L9 9L0.999999 1" />
        </button>
      </div>
    </div>
  );
};
