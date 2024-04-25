import { FunctionComponent } from "react";

export const DaysOfWeek: FunctionComponent = () => {
  return (
    <div className="grid grid-cols-7 gap-1">
      {["日", "月", "火", "水", "木", "金", "土"].map((weekday, index) => (
        <div key={index} className="text-center">
          <span
            className={`w-10 h-10 grid items-center ${
              index === 0
                ? "text-red-400"
                : index === 6
                ? "text-[#3587ec]"
                : "text-[#ffffffb3]"
            }`}
          >
            {weekday}
          </span>
        </div>
      ))}
    </div>
  );
};
