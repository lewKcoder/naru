import { BodyRow } from "./components/body-row";
import { HeadCell } from "./components/head-cell";
import { Component } from "./types";

export const Table: Component = () => {
  return (
    <table>
      <thead className="text-sm border-b-[1px]">
        <tr>
          <HeadCell width="w-[31%]">やること</HeadCell>
          <HeadCell width="w-[19%]">時間</HeadCell>
          <HeadCell width="w-[43%]">内容</HeadCell>
          <HeadCell width="w-[7%]" />
        </tr>
      </thead>
      <tbody className="text-sm">
        <BodyRow />
      </tbody>
    </table>
  );
};
