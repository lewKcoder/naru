import { Component } from "./types";

export const Panel: Component = (props) => {
  const { children, customStyle } = props;

  return (
    <div
      className={`${customStyle}  rounded-lg shadow-[0px_1px_24px_#0000001c]`}
    >
      {children}
    </div>
  );
};
