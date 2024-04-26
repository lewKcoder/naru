import { useState } from "react";
import { Util } from "./types";

const secondsInit = 0;
const minutesInit = 0;

export const useOperateTimer: Util = (props) => {
  const ref = props;

  const [timer, setTimer] = useState({
    seconds: secondsInit,
    minutes: minutesInit,
  });
  const [isStarted, setIsStarted] = useState(false);

  const resetTimer = () => {
    setIsStarted(false);
    setTimer({ seconds: 0, minutes: 0 });

    if (ref.current) {
      clearInterval(ref.current);
    }
  };

  const startTimer = () => {
    setIsStarted(true);
    ref.current = setInterval(() => {
      setTimer((prev) => {
        if (prev.seconds >= 59) {
          return { seconds: 0, minutes: prev.minutes + 1 };
        } else {
          return { seconds: prev.seconds + 1, minutes: prev.minutes };
        }
      });
    }, 1000);
  };

  return { resetTimer, startTimer, timer, isStarted };
};
