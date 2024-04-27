import HeadImported from "next/head";
import { Component } from "./types";

export const Head: Component = (props) => {
  const { title, description, children } = props;

  return (
    <HeadImported>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {children}
    </HeadImported>
  );
};
