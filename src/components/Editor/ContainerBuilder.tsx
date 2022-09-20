import React from "react";

export enum ToolbarOptions {
  fontStyle = 0,
  quoteCode,
  headers,
  list,
  indentation,
  font,
  script,
  align,
  clear,
  image,
}

export const buildContainer = (
  options: ToolbarOptions[] | null,
  AddEmbedHandler: React.FC<{ onFinish: (embedObject: Object) => void }> | null
) => {
  if (!options)
    options = [
      ToolbarOptions.fontStyle,
      ToolbarOptions.list,
      ToolbarOptions.align,
      ToolbarOptions.font,
      ToolbarOptions.image,
      ToolbarOptions.clear,
    ];

  let container: Array<Array<string> | Object> = [];
  options.forEach((o) => {
    switch (o) {
      case ToolbarOptions.fontStyle:
        container.push(["bold", "italic", "underline", "strike"]);
        break;
      case ToolbarOptions.quoteCode:
        container = [...container, ["blockquote", "code-block"]];
        break;
      case ToolbarOptions.headers:
        container = [
          ...container,
          [{ header: 1 }, { header: 2 }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ];
        break;
      case ToolbarOptions.list:
        container = [...container, [{ list: "ordered" }, { list: "bullet" }]];
        break;
      case ToolbarOptions.indentation:
        container = [...container, [{ indent: "-1" }, { indent: "+1" }]];
        break;
      case ToolbarOptions.font:
        container = [
          ...container,
          [{ font: [] }],
          [{ direction: "rtl" }],
          [{ size: ["small", false, "large", "huge"] }],
        ];
        break;
      case ToolbarOptions.script:
        container = [...container, [{ script: "sub" }, { script: "super" }]];
        break;
      case ToolbarOptions.align:
        container = [...container, [{ align: [] }]];
        break;
      case ToolbarOptions.image:
        container = [...container, ["image"]];
        break;
      case ToolbarOptions.clear:
        container = [...container, ["clean"]];
        break;
    }
  });
  if (AddEmbedHandler) container = [...container, ["customembed"]];

  return container;
};
