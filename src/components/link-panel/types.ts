import { FunctionComponent } from "react";

type Props = {
  href: string;
  label: string;
  isActive: boolean;
};

export type Component = FunctionComponent<Props>;
