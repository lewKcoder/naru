"use client";

import { Calendar } from "@/components/calendar";
import { Head } from "@/components/head";
import { KnowledgeBubble } from "@/components/knowledge-bubble";
import { Panel } from "@/components/panel";
import { Table } from "@/components/table";
import { NumericalPanels } from "@/layouts/numerical-panels";
import { SideNavigation } from "@/layouts/side-navigation";

export default function Home() {
  return (
    <>
      <Head title="naru" description="毎日の学習タスクを習慣付ける" />

      <header className="border-b border-[#D9D9D9] h-16"></header>

      <div className="grid grid-flow-col grid-cols-[227px_1fr] gap-9 p-5">
        <SideNavigation />

        <div className="grid gap-4">
          <div className="grid grid-flow-col grid-cols-[auto_1fr]">
            <div className="grid grid-flow-col gap-4 grid-cols-[320px_208px]">
              <Calendar />

              <NumericalPanels />
            </div>

            <KnowledgeBubble />
          </div>

          <div className="grid grid-flow-col gap-4 grid-cols-[50%_auto]">
            <div className="grid gap-4 grid-rows-[auto_1fr]">
              <Panel customStyle="py-4 px-3 italic text-[#2e2e2e]">
                <p className="font-medium text-sm">
                  夢を叶えるコツは狂ったように欲しがること。
                </p>
                <p className="text-end text-xs">山田太郎</p>
              </Panel>

              <Panel customStyle="text-[#2e2e2e]">
                <Table />
              </Panel>
            </div>

            <Panel customStyle="py-8 px-10 text-[#2e2e2e] grid gap-6 grid-rows-[auto_1fr] min-h-[300px]">
              <p className="font-bold text-sm">2023年1月2日のアウトプット</p>
              <p className="text-xs">
                夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。夢を叶えるコツは狂ったように欲しがること。
              </p>
            </Panel>
          </div>
        </div>
      </div>
    </>
  );
}
