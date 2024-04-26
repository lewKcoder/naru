import { FunctionComponent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  customStyle?: string;
};

export type Component = FunctionComponent<Props>;
