"use client";

import { Calendar } from "@/components/calendar";
import { Head } from "@/components/head";
import { NumericalPanels } from "@/layouts/numerical-panels";
import { SideNavigation } from "@/layouts/side-navigation";

export default function Home() {
  return (
    <>
      <Head title="naru" description="毎日の学習タスクを習慣付ける" />

      <header className="border-b border-[#D9D9D9] h-16"></header>

      <div className="grid grid-flow-col [grid-template-columns:227px_1fr] gap-9 p-5">
        <SideNavigation />

        <div className="grid grid-flow-col gap-4 [grid-template-columns:320px_208px]">
          <Calendar />

          <NumericalPanels />
        </div>
      </div>
    </>
  );
}
