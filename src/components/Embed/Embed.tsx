import { Quill } from "react-quill";
const BlockEmbed = Quill.import("blots/block/embed");

export class Embed extends BlockEmbed {
  static blotName = "customembed";
  static tagName = "x";
  static ref = {};

  static create(embedObject: any) {
    const node = super.create();
    node.innerHTML = JSON.stringify(embedObject);
    return node;
  }
}
