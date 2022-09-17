export enum toolbarOptions {
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

export const buildContainer = (options: toolbarOptions[] | null) => {
  if (!options)
    options = [
      toolbarOptions.fontStyle,
      toolbarOptions.list,
      toolbarOptions.align,
      toolbarOptions.font,
      toolbarOptions.image,
      toolbarOptions.clear,
    ];

  let container: Array<Array<string> | Object> = [];
  options.forEach((o) => {
    switch (o) {
      case toolbarOptions.fontStyle:
        container.push(["bold", "italic", "underline", "strike"]);
        break;
      case toolbarOptions.quoteCode:
        container = [...container, ["blockquote", "code-block"]];
        break;
      case toolbarOptions.headers:
        container = [
          ...container,
          [{ header: 1 }, { header: 2 }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ];
        break;
      case toolbarOptions.list:
        container = [...container, [{ list: "ordered" }, { list: "bullet" }]];
        break;
      case toolbarOptions.indentation:
        container = [...container, [{ indent: "-1" }, { indent: "+1" }]];
        break;
      case toolbarOptions.font:
        container = [
          ...container,
          [{ font: [] }],
          [{ direction: "rtl" }],
          [{ size: ["small", false, "large", "huge"] }],
        ];
        break;
      case toolbarOptions.script:
        container = [...container, [{ script: "sub" }, { script: "super" }]];
        break;
      case toolbarOptions.align:
        container = [...container, [{ align: [] }]];
        break;
      case toolbarOptions.image:
        container = [...container, ["image"]];
        break;
      case toolbarOptions.clear:
        container = [...container, ["clean"]];
        break;
    }
  });
  container = [...container, ["customembed"]];
  return container;
};
