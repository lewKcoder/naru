import { FunctionComponent, useRef } from "react";
import { Panel } from "../panel";
import { TimerResetIcon, TimerStartIcon } from "./components";
import { useOperateTimer } from "./utils/use-operate-timer/use-operate-timer";

export const Timer: FunctionComponent = () => {
  const $timer = useRef<NodeJS.Timeout>();

  const { timer, isStarted, resetTimer, startTimer } = useOperateTimer($timer);

  return (
    <Panel customStyle="px-[16px] py-[11px] bg-white h-[70px]">
      <div className="grid grid-flow-col gap-5 items-center">
        <button
          className={`w-7 h-7 rounded p-1 ${
            isStarted
              ? "shadow-[0_0_2px_#838383]"
              : "shadow-[inset_0_0_8px_#ababab]"
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
            isStarted
              ? "shadow-[inset_0_0_8px_#ababab]"
              : "shadow-[0_0_2px_#838383]"
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
