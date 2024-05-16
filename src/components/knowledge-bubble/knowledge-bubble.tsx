import { Component } from "./types";

export const KnowledgeBubble: Component = () => {
  const absoluteCenter =
    "absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4";
  const roundBlur = "blur-sm rounded-full";

  return (
    <div className="relative">
      <div className={`${absoluteCenter}`}>
        <div className={`w-[300px] h-[300px] bg-white ${roundBlur}`} />
        <div
          className={`w-[99%] h-[99%] bg-[#86f0f9] ${absoluteCenter} ${roundBlur}`}
        />
        <div
          className={`w-[40%] h-[40%] bg-white ${absoluteCenter} ${roundBlur}`}
        />
      </div>
    </div>
  );
};
