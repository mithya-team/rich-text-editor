import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal } from "../Modal";

import "./Editor.css";

export interface EditorProps {
  imageUploader: (file: File) => Promise<string>;
}

const Editor = (props: EditorProps) => {
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
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "clean"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
        ],
        handlers: {
          image: addImageHandler,
        },
      },
    };
  }, []);

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
          <Modal
            closeModal={closeModal}
            imageUploader={props.imageUploader}
            insertImage={insertImage}
          />
        )}
      </div>
    </div>
  );
};

export default Editor;
