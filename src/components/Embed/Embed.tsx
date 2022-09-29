import React from "react";
import * as ReactDOM from "react-dom/client";
import { Quill } from "react-quill";
const BlockEmbed = Quill.import("blots/block/embed");

export class Embed extends BlockEmbed {
  static blotName = "customembed";
  static tagName = "";
  static ref = {};

  static create([embedObject, EmbedPlaceholder]: any[]) {
    const node = super.create();
    node.setAttribute("data-json", JSON.stringify(embedObject));
    node.innerHTML = "";
    const root = ReactDOM.createRoot(node);
    root.render(EmbedPlaceholder(embedObject));
    return node;
  }
}
