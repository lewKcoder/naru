import { FunctionComponent, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  width: string;
};

export type Component = FunctionComponent<Props>;
