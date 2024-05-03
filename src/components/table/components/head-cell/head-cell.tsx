import { Component } from "./types";

export const HeadCell: Component = (props) => {
  const { children, width } = props;

  return (
    <th scope="col" className={`${width} text-start px-[16px] py-[10px]`}>
      {children}
    </th>
  );
};
