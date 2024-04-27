import Link from "next/link";
import { Component } from "./types";

export const LinkPanel: Component = (props) => {
  const { href, label, isActive } = props;

  const panel = isActive && "bg-white shadow-[0px_4px_10px_#0000001c]";

  return (
    <Link
      href={href}
      className={`${panel} grid items-center grid-flow-col gap-3 rounded-lg py-2 px-5 [grid-template-columns:auto_1fr] transition-all hover:bg-white hover:transition-all hover:shadow-[0px_4px_10px_#0000001c]`}
    >
      <span
        className={`bg-white w-9 h-9 rounded-lg shadow-[0px_4px_6px_#0000001c]`}
      ></span>
      {label}
    </Link>
  );
};
