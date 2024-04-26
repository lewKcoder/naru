import { Component } from "./types";

export const Panel: Component = (props) => {
  const { children, customStyle } = props;

  return <div className={`${customStyle}  rounded-lg`}>{children}</div>;
};
