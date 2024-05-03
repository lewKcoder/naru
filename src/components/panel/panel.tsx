import { Component } from "./types";

export const Panel: Component = (props) => {
  const { children, customStyle } = props;

  return (
    <div
      className={`${customStyle}  rounded-lg shadow-[0px_0px_48px_rgb(0,0,0,0.12)]`}
    >
      {children}
    </div>
  );
};
