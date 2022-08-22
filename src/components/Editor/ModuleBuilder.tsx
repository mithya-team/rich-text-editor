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
}
export const buildModule = (modules: any, options: toolbarOptions[]) => {
  if (options.find((s) => s == toolbarOptions.fontStyle))
    modules.toolbar.container.push(["bold", "italic", "underline", "strike"]);

  if (options.find((s) => s == toolbarOptions.quoteCode))
    modules.toolbar.container.push(["blockquote", "code-block"]);

  if (options.find((s) => s == toolbarOptions.headers)) {
    modules.toolbar.container.push([{ header: 1 }, { header: 2 }]);
    modules.toolbar.container.push([{ header: [1, 2, 3, 4, 5, 6, false] }]);
  }

  if (options.find((s) => s == toolbarOptions.list))
    modules.toolbar.container.push([{ list: "ordered" }, { list: "bullet" }]);

  if (options.find((s) => s == toolbarOptions.indentation))
    modules.toolbar.container.push([{ indent: "-1" }, { indent: "+1" }]);

  if (options.find((s) => s == toolbarOptions.font)) {
    modules.toolbar.container.push([{ font: [] }]);
    modules.toolbar.container.push([{ direction: "rtl" }]);
    modules.toolbar.container.push([
      { size: ["small", false, "large", "huge"] },
    ]);
  }

  if (options.find((s) => s == toolbarOptions.script))
    modules.toolbar.container.push([{ script: "sub" }, { script: "super" }]);

  if (options.find((s) => s == toolbarOptions.align))
    modules.toolbar.container.push([{ align: [] }]);

  if (options.find((s) => s == toolbarOptions.clear))
    modules.toolbar.container.push(["clean"]);

  modules.toolbar.container.push(["image"]);
  return modules;
};
