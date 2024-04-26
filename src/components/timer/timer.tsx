import { FunctionComponent, useRef } from "react";
import { Panel } from "../panel";
import { TimerResetIcon, TimerStartIcon } from "./components";
import { useOperateTimer } from "./utils/use-operate-timer/use-operate-timer";

export const Timer: FunctionComponent = () => {
  const $timer = useRef<NodeJS.Timeout>();

  const { timer, isStarted, resetTimer, startTimer } = useOperateTimer($timer);

  return (
    <Panel customStyle="px-[16px] py-[11px] bg-gradient-to-r from-[#627594] to-[#a8b8d8] text-white h-[70px]">
      <div className="grid grid-flow-col gap-5 items-center">
        <button
          className={`w-7 h-7 rounded p-1 ${
            isStarted ? "bg-white" : "bg-[#b3b3b3]"
          }`}
          onClick={resetTimer}
          disabled={!isStarted}
        >
          <TimerResetIcon />
        </button>

        <span className="font-['Open_Sans'] text-center text-[32px]">
          {String(timer.minutes).padStart(2, "0")}:
          {String(timer.seconds).padStart(2, "0")}
        </span>

        <button
          className={`w-7 h-7 rounded p-1 ${
            isStarted ? "bg-[#b3b3b3]" : "bg-white"
          }`}
          onClick={startTimer}
          disabled={isStarted}
        >
          <TimerStartIcon />
        </button>
      </div>
    </Panel>
  );
};
