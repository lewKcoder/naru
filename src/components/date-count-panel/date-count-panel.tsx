import { Panel } from "../panel";
import { Component } from "./types";

export const DateCountPanel: Component = (props) => {
  const { label, value, unit } = props;

  return (
    <Panel customStyle="grid items-center px-[16px] h-[70px]">
      <div className="font-normal grid grid-flow-col justify-between items-center">
        <span className="text-sm">{label}：</span>
        <div>
          <span className="text-2xl">{value}</span>
          <span className="pl-1">{unit}</span>
        </div>
      </div>
    </Panel>
  );
};
