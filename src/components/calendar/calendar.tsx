import { useState } from "react";
import { FullDate, MonthAndYear, Component } from "./types";
import { DaysOfWeek, Header, Dates } from "./components";
import { InitDates } from "./utils/init-dates/init-dates";
import { useOperateMonth } from "./utils/use-operate-month/use-operate-month";

const dateRaw = new Date();
const thisYear = dateRaw.getFullYear();
const thisMonth = dateRaw.getMonth() + 1;

export const Calendar: Component = () => {
  const { calendarDate, setCalendarDate, previousMonth, nextMonth } =
    useOperateMonth({
      thisMonth,
      thisYear,
    });

  const dates = InitDates(calendarDate);

  return (
    <div className="w-80 rounded-lg py-4 px-6 grid gap-3 text-sm bg-white shadow-[0px_0px_48px_rgb(0,0,0,0.12)]">
      <Header
        thisMonth={thisMonth}
        thisYear={thisYear}
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
      />

      <DaysOfWeek />

      <Dates
        dates={dates}
        dateRaw={dateRaw}
        thisYear={thisYear}
        thisMonth={thisMonth}
        calendarDate={calendarDate}
      />
    </div>
  );
};
