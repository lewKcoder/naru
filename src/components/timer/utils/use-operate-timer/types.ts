import { MutableRefObject } from "react";

type Props = MutableRefObject<NodeJS.Timeout | undefined>;

type ReturnType = {
  resetTimer: () => void;
  startTimer: () => void;
  timer: { seconds: number; minutes: number };
  isStarted: boolean;
};

export type Util = (args: Props) => ReturnType;
