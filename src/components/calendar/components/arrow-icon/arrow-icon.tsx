import { Component } from "./types";

export const ArrowIcon: Component = (props) => {
  const { svgPath } = props;

  return (
    <svg
      width="8"
      height="16"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={svgPath}
        stroke="#3F3F3F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
