import { DateCountPanel } from "@/components/date-count-panel";
import { Panel } from "@/components/panel";
import { Timer } from "@/components/timer";
import { FunctionComponent, useEffect, useState } from "react";

export const NumericalPanels: FunctionComponent = () => {
  const [nowTime, setNowTime] = useState(new Date());
  const [isFlashColon, setIsFlashColon] = useState(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      setNowTime(new Date());
      setIsFlashColon((prev) => !prev);
    }, 500);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="w-52 grid grid-flow-row gap-4 grid-rows-[1fr_auto_auto_auto] items-center">
      <div className="font-['Open_Sans'] h-[70px] font-black text-[51px] text-center">
        {String(nowTime.getHours()).padStart(2, "0")}
        <span className={`${isFlashColon ? "text-black" : "text-transparent"}`}>
          :
        </span>
        {String(nowTime.getMinutes()).padStart(2, "0")}
      </div>

      <Timer />

      <DateCountPanel label="連続" value="24" unit="日目" />

      <DateCountPanel label="合計" value="56" unit="日" />
    </div>
  );
};
