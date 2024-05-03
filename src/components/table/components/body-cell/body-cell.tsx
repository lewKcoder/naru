import { Component } from "./types";

export const BodyCell: Component = (props) => {
  const { children } = props;

  return <td className="px-[16px] py-[9px] border-t border-b">{children}</td>;
};
