import { Component } from "./types";
import styles from "./styles.module.scss";

export const KnowledgeBubble: Component = () => {
  const absoluteCenter =
    "absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4";
  const roundBlur = "blur-sm rounded-full";

  return (
    <div className="relative -z-10">
      <div className={`${absoluteCenter}`}>
        <div className={`w-[100px] h-[100px] bg-white ${roundBlur}`} />
        <div
          className={`w-[99%] h-[99%] bg-[#86f0f9] ${absoluteCenter} ${roundBlur}`}
        />
        <div
          className={`w-[40%] h-[40%] bg-white ${absoluteCenter} ${roundBlur}`}
        />

        {/* NOTE: tailwindでの動的クラス許容は非推奨＆複雑なスタイルのため、sparkle要素のスタイルに関してはscssで適用する */}
        {[...new Array(20)].map((_, index) => (
          <div key={index} className={styles[`sparkle-${index}`]} />
        ))}
      </div>
    </div>
  );
};
