import { FunctionComponent } from "react";

type Props = {
  label: string;
  value: string;
  unit: string;
};

export type Component = FunctionComponent<Props>;
