import Link from "next/link";
import { Component } from "./types";

export const LinkPanel: Component = (props) => {
  const { href, label, isActive } = props;

  const panel = isActive
    ? "bg-[#dae7ff] text-[#4c8bff] hover:bg-[#b8d1ff]"
    : "hover:bg-[#dbdbdb]";

  return (
    <Link
      href={href}
      className={`grid items-center py-2 px-5 rounded-lg ${panel}`}
    >
      {label}
    </Link>
  );
};
