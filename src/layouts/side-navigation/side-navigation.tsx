import { LinkPanel } from "@/components/link-panel";
import { FunctionComponent } from "react";

export const SideNavigation: FunctionComponent = () => {
  return (
    <nav className="list-none text-sm">
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
  );
};
