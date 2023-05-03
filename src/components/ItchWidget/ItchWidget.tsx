import React from "react";
import { useItchWidget } from "./useItchWidget";
import { itchHeight } from "./constants";

export type ItchWidgetProps = {
  title: string;
  src: string;
};

export const ItchWidget = ({ src, title }: ItchWidgetProps) => {
  const { gameLink, width } = useItchWidget(title);

  return (
    <iframe
      title={title}
      frameBorder="0"
      src={src}
      width={width}
      height={itchHeight}
    >
      <a href={gameLink}>{title} by therealkylepacheco</a>
    </iframe>
  );
};
