import { FunctionComponent, useRef } from "react";
import { Panel } from "../panel";
import { TimerResetIcon, TimerStartIcon } from "./components";
import { useOperateTimer } from "./utils/use-operate-timer/use-operate-timer";

export const Timer: FunctionComponent = () => {
  const $timer = useRef<NodeJS.Timeout>();

  const { timer, isStarted, resetTimer, startTimer } = useOperateTimer($timer);

  const offButtonShadow =
    "shadow-[inset_-1px_1px_4px_0px_#fff,inset_1px_-1px_4px_0px_#838383,-1px_2px_4px_0px_#838383]";
  const onButtonShadow =
    "shadow-[inset_1px_-1px_4px_0px_#d0d0d0,inset_-1px_1px_4px_0px_#838383]";

  return (
    <Panel customStyle="px-[16px] py-[11px] h-[70px]">
      <div className="grid grid-flow-col gap-4 items-center">
        <button
          className={`w-9 h-9 rounded-full p-2 ${
            isStarted ? offButtonShadow : onButtonShadow
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
          className={`w-9 h-9 rounded-full p-2 ${
            isStarted ? onButtonShadow : offButtonShadow
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
