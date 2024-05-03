import { BodyCell } from "../body-cell";
import { Component } from "./types";

export const BodyRow: Component = () => {
  return (
    <tr>
      <BodyCell>英語学習</BodyCell>
      <BodyCell>1時間45分</BodyCell>
      <BodyCell>単語帳4ページ</BodyCell>
      <BodyCell>
        <label
          htmlFor="done"
          className="relative w-11 h-4 block cursor-pointer"
        >
          <input type="checkbox" id="done" className="hidden peer" />
          <div className="w-full h-full transition-all bg-[#d0d0d0] absolute top-2/4 translate-y-[-50%] rounded-3xl peer-checked:bg-[#abc9ff]" />
          <div className="w-5 h-5 transition-all bg-[#a9a9a9] rounded-full absolute top-2/4 translate-y-[-50%] peer-checked:right-0 peer-checked:bg-[#1976d2]" />
        </label>
      </BodyCell>
    </tr>
  );
};
