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
    node.innerHTML = "custom embed goes here";
    node.contentEditable = false;
    return node;
  }
}
