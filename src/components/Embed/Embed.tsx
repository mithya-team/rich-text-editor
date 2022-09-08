import { Quill } from "react-quill";
import React from "react";
import ReactDOM from "react-dom";
import { EmbedComponent } from "./EmbedComponent";

const BlockEmbed = Quill.import("blots/block/embed");

export class Embed extends BlockEmbed {
  static blotName = "customembed";
  static tagName = "div";
  static className = `ql-custom`;
  static ref = {};

  static create(val: any) {
    const node = super.create();

    ReactDOM.render(<EmbedComponent msg={val.msg} />, node);
    //createRoot(<PollComponent msg={val.msg} /> , node);
    //root.render(<PollComponent />);
    //render(<PollComponent />, node);
    node.contentEditable = false;

    return node;
  }
}
