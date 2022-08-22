import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal } from "../Modal";
import "./Editor.css";
import { buildModule, toolbarOptions } from "./ModuleBuilder";

export interface EditorProps {
  id: any | undefined;
  className: any | undefined;
  value: any | undefined;
  defaultValue: any | undefined;
  readOnly: any | undefined;
  placeholder: any | undefined;
  modules: any | undefined;
  formats: any | undefined;
  style: any | undefined;
  theme: any | undefined;
  tabIndex: any | undefined;
  bounds: any | undefined;
  children: any | undefined;
  onChange: any | undefined;
  onChangeSelection: any | undefined;
  onFocus: any | undefined;
  onBlur: any | undefined;
  onKeyPress: any | undefined;
  onKeyDown: any | undefined;
  onKeyUp: any | undefined;
  preserveWhitespace: any | undefined;
  imageUploader: (file: File) => Promise<string>;
  options: toolbarOptions[];
}

export const Editor = ({ imageUploader, options }: EditorProps) => {
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
    return buildModule(
      {
        toolbar: {
          container: [],
          handlers: {
            image: addImageHandler,
          },
        },
      },
      options
    );
  }, [options]);

  return (
    <div className="main">
      <div>
        <ReactQuill defaultValue={""} modules={modules} ref={quillObj} />
        {showModal && (
          <Modal imageUploader={imageUploader} insertImage={insertImage} />
        )}
      </div>
    </div>
  );
};
