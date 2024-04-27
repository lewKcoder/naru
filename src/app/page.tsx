"use client";

import { Calendar } from "@/components/calendar";
import { Head } from "@/components/head";
import { LinkPanel } from "@/components/link-panel";
import { NumericalPanels } from "@/layouts/numerical-panels";

export default function Home() {
  return (
    <>
      <Head title="naru" description="毎日の学習タスクを習慣付ける" />

      <header className="border-b border-[#D9D9D9] h-16"></header>

      <div className="grid grid-flow-col [grid-template-columns:227px_1fr] gap-9 p-5">
        <div>
          <nav className="list-none grid grid-flow-row gap-6">
            <li>
              <LinkPanel href="/" label="成長ボード" isActive />
            </li>
            <li>
              <LinkPanel href="memo" label="メモ" isActive={false} />
            </li>
            <li>
              <LinkPanel href="settins" label="設定" isActive={false} />
            </li>
          </nav>
        </div>

        <div className="grid grid-flow-col gap-4 [grid-template-columns:320px_208px]">
          <Calendar />

          <NumericalPanels />
        </div>
      </div>
    </>
  );
}
