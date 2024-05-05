import { useState } from "react";
import { Component } from "./types";
import { FullDate } from "../../types";

export const Dates: Component = (props) => {
  const { dates, calendarDate, dateRaw, thisYear, thisMonth } = props;

  const [selectedDate, setSelectedDate] = useState<FullDate>({
    day: dateRaw.getDate(),
    month: thisMonth,
    year: thisYear,
  });

  return (
    <div className="grid grid-cols-7 grid-rows-6 gap-1">
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
                "bg-[#1976d2] text-white"
              } ${
                dateRaw.getDate() === day &&
                thisMonth === calendarDate.month &&
                thisYear === calendarDate.year &&
                inThisMonth &&
                "border-[1px] border-[#4c8bff] box-border"
              }
                  ${!inThisMonth && "text-transparent"}`}
            >
              {day}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};
