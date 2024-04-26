import { FunctionComponent, useState } from "react";
import { Panel } from "../panel";
import { TimerResetIcon, TimerStartIcon } from "./components";

const secondsInit = 0;
const minutesInit = 0;

export const Timer: FunctionComponent = () => {
  const [seconds, setSeconds] = useState(secondsInit);
  const [minutes, setMinutes] = useState(minutesInit);
  const [isStarted, setIsStarted] = useState(false);

  return (
    <Panel customStyle="px-[16px] py-[11px] bg-gradient-to-r from-[#627594] to-[#a8b8d8] text-white h-[70px]">
      <div className="grid grid-flow-col gap-5 items-center">
        <button className="w-7 h-7 rounded bg-white p-1">
          <TimerResetIcon />
        </button>

        <span className="text-center font-bold text-[32px]">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>

        <button className="w-7 h-7 rounded bg-white p-1">
          <TimerStartIcon />
        </button>
      </div>
    </Panel>
  );
};
