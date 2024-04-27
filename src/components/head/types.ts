import { FunctionComponent, ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  children?: ReactNode;
};

export type Component = FunctionComponent<Props>;
