import Link from "next/link";
import { Component } from "./types";

export const LinkPanel: Component = (props) => {
  const { href, label, isActive } = props;

  const panel = isActive && "bg-white shadow-[0px_1px_24px_#0000001c]";
  const icon = isActive ? "bg-[#A8B8D8]" : "bg-white";

  return (
    <Link
      href={href}
      className={`${panel} grid items-center grid-flow-col gap-3 rounded-lg py-3 px-5 [grid-template-columns:auto_1fr]`}
    >
      <span className={`${icon} w-7 h-7 rounded-lg`}></span>
      {label}
    </Link>
  );
};
