import React from "react";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import parse from "html-react-parser";

export interface DisplayProps {
  delta: any;
}
export const Display = ({ delta }: DisplayProps) => {
  const cfg = {};
  const converter = new QuillDeltaToHtmlConverter(delta["ops"], cfg);
  const html = converter.convert();
  return <div className="cover">{parse(html)}</div>;
};
