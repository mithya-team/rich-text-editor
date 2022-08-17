import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal } from "../Modal";

import "./Editor.css";

export interface EditorProps {
  imageUploader: (file: File) => Promise<string>;
  options: string[];
}

const Editor = ({ imageUploader, options }: EditorProps) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const quillObj: any = useRef();
  const addImageHandler = () => {
    openModal();
  };
  const insertImage = (url: string) => {
    quillObj.current.getEditor().focus();
    const range = quillObj.current.getEditor().getSelection();
    quillObj.current.getEditor().insertEmbed(range.index, "image", url);
    closeModal();
  };

  const modules = useMemo(() => {
    const modules: any = {
      toolbar: {
        container: [],
        handlers: {
          image: addImageHandler,
        },
      },
    };

    if (options.find((s) => s == "font-style"))
      modules.toolbar.container.push(["bold", "italic", "underline", "strike"]);

    if (options.find((s) => s == "quote/code"))
      modules.toolbar.container.push(["blockquote", "code-block"]);

    if (options.find((s) => s == "headers")) {
      modules.toolbar.container.push([{ header: 1 }, { header: 2 }]);
      modules.toolbar.container.push([{ header: [1, 2, 3, 4, 5, 6, false] }]);
    }

    if (options.find((s) => s == "list"))
      modules.toolbar.container.push([{ list: "ordered" }, { list: "bullet" }]);

    if (options.find((s) => s == "indentation"))
      modules.toolbar.container.push([{ indent: "-1" }, { indent: "+1" }]);

    if (options.find((s) => s == "font")) {
      modules.toolbar.container.push([{ font: [] }]);
      modules.toolbar.container.push([{ direction: "rtl" }]);
      modules.toolbar.container.push([
        { size: ["small", false, "large", "huge"] },
      ]);
    }

    if (options.find((s) => s == "script"))
      modules.toolbar.container.push([{ script: "sub" }, { script: "super" }]);

    if (options.find((s) => s == "align"))
      modules.toolbar.container.push([{ align: [] }]);

    if (options.find((s) => s == "clear"))
      modules.toolbar.container.push(["clean"]);

    modules.toolbar.container.push(["image"]);
    return modules;
  }, [options]);

  return (
    <div className="main">
      <div>
        <ReactQuill
          theme="snow"
          defaultValue={""}
          modules={modules}
          ref={quillObj}
        />
        {showModal && (
          <Modal imageUploader={imageUploader} insertImage={insertImage} />
        )}
      </div>
    </div>
  );
};

export default Editor;
