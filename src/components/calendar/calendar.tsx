import { useState } from "react";
import { FullDate, MonthAndYear, Dates, Component } from "./types";
import { DaysOfWeek } from "./components/day-of-week";
import { Header } from "./components/header";

export const Calendar: Component = () => {
  const dateRaw = new Date();

  const thisYear = dateRaw.getFullYear();
  const thisMonth = dateRaw.getMonth() + 1;
  const [calendarDate, setCalendarDate] = useState<MonthAndYear>({
    month: thisMonth,
    year: thisYear,
  });
  const [selectedDate, setSelectedDate] = useState<FullDate>({
    day: dateRaw.getDate(),
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

  const initDates = () => {
    const dates: Dates = [];
    const { month, year } = calendarDate;

    const daysInMonth = new Date(year, month, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);
      const weekday = date.getDay();
      dates.push({
        day,
        weekday,
        inThisMonth: true,
      });
    }

    const firstWeekday = dates[0].weekday;
    const lastWeekday = dates[dates.length - 1].weekday;

    if (firstWeekday !== 0) {
      const previousMonth = month === 0 ? 12 : month;
      const daysInPreviousMonth = new Date(year, previousMonth, 0).getDate();
      for (let i = 0; i < firstWeekday; i++) {
        dates.unshift({
          day: daysInPreviousMonth - i,
          weekday: i,
          inThisMonth: false,
        });
      }
    }

    if (lastWeekday !== 6) {
      for (let i = 1; i <= 6 - lastWeekday; i++) {
        dates.push({
          day: i,
          weekday: lastWeekday + i,
          inThisMonth: false,
        });
      }
    }

    return dates;
  };

  const dates = initDates();

  return (
    <div className="w-[320px] rounded-lg bg-gradient-to-r from-[#627594] to-[#a8b8d8] py-4 px-6 grid gap-3 text-white text-sm">
      <Header
        thisMonth={thisMonth}
        thisYear={thisYear}
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
        previousMonth={previousMonth}
        nextMonth={nextMonth}
      />

      <DaysOfWeek />

      <div className="grid grid-cols-7 gap-1">
        {dates.map(({ day, inThisMonth }, index) => (
          <div key={index} className="w-fit">
            <button
              className="relative w-9 h-9"
              onClick={() => setSelectedDate({ day, ...calendarDate })}
              disabled={!inThisMonth}
            >
              <span
                className={`w-full h-full rounded-full grid items-center ${
                  selectedDate.day === day &&
                  selectedDate.month === calendarDate.month &&
                  selectedDate.year === calendarDate.year &&
                  inThisMonth &&
                  "bg-[#444f61]"
                } ${
                  dateRaw.getDate() === day &&
                  thisMonth === calendarDate.month &&
                  thisYear === calendarDate.year &&
                  inThisMonth &&
                  "border-[1px] border-[#d1dcf0] box-border"
                }
                  ${!inThisMonth && "text-transparent"}`}
              >
                {day}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
