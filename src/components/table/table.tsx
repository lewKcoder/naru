import { Component } from "./types";

export const Table: Component = () => {
  return (
    <table>
      <thead className="text-sm border-b-[1px]">
        <tr>
          <th scope="col" className="w-[31%] text-start px-[10px] py-[10px]">
            やること
          </th>
          <th scope="col" className="w-[16%] text-start px-[10px] py-[10px]">
            時間
          </th>
          <th scope="col" className="w-[46%] text-start px-[10px] py-[10px]">
            内容
          </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="text-sm">
        <tr>
          <td className="px-[10px] py-[9px] border-t border-b">英語学習</td>
          <td className="px-[10px] py-[9px] border-t border-b">1時間45分</td>
          <td className="px-[10px] py-[9px] border-t border-b">
            単語帳4ページ
          </td>
          <td className="px-[10px] py-[9px] border-t border-b">
            <label htmlFor="done" className="relative w-11 h-4 block">
              <input type="checkbox" id="done" className="hidden peer" />
              <div className="w-full h-full transition-all bg-[#d0d0d0] absolute top-2/4 translate-y-[-50%] rounded-3xl peer-checked:bg-[#abc9ff]" />
              <div className="w-5 h-5 transition-all bg-[#a9a9a9] rounded-full absolute top-2/4 translate-y-[-50%] peer-checked:right-0 peer-checked:bg-[#1976d2]" />
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
