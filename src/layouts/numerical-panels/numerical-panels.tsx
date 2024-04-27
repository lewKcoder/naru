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
    <div className="w-52 grid grid-flow-row gap-4">
      <div className="font-['Open_Sans'] h-[70px] font-black text-[51px] text-center">
        {String(nowTime.getHours()).padStart(2, "0")}
        <span className={`${isFlashColon ? "text-black" : "text-transparent"}`}>
          :
        </span>
        {String(nowTime.getMinutes()).padStart(2, "0")}
      </div>

      <Timer />

      <Panel customStyle="grid items-center px-[16px] bg-gradient-to-r from-[#627594] to-[#a8b8d8] text-white h-[70px]">
        <div className="font-normal grid grid-flow-col justify-between items-center">
          <span className="text-[#ffffffb3] text-sm">連続：</span>
          <div>
            <span className="text-2xl">24</span>
            <span className="pl-1">日目</span>
          </div>
        </div>
      </Panel>
      <Panel customStyle="grid items-center px-[16px] bg-gradient-to-r from-[#627594] to-[#a8b8d8] text-white h-[70px]">
        <div className="font-normal grid grid-flow-col justify-between items-center">
          <span className="text-[#ffffffb3] text-sm">合計：</span>
          <div>
            <span className="text-2xl">56</span>
            <span className="pl-1">日</span>
          </div>
        </div>
      </Panel>
    </div>
  );
};
