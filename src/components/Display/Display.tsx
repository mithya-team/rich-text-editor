import React from "react";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import parse from "html-react-parser";
import { EmbedComponent } from "../Embed/EmbedComponent";

export interface DisplayProps {
  delta: any;
}
export const Display = ({ delta }: DisplayProps) => {
  const cfg = {};

  if (!delta.hasOwnProperty("ops")) return <></>;
  const arr = delta["ops"].map((op: any, key: any) => {
    if (op.insert.hasOwnProperty("customembed"))
      return <EmbedComponent msg={"testing"} />;
    else {
      const converter = new QuillDeltaToHtmlConverter([delta["ops"][key]], cfg);
      const html = converter.convert();
      return parse(html);
    }
  });

  return <div className="cover">{arr}</div>;
};
