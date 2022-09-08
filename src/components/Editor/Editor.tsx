import React, { useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal } from "../Modal";
import "./Editor.css";
import { buildContainer, toolbarOptions } from "./ContainerBuilder";
import { Embed } from "../Embed";

export interface EditorProps {
  quillProps: any | undefined | null;
  imageUploader: ((file: File) => Promise<string>) | undefined | null;
  options: toolbarOptions[] | undefined | null;
  onChange: any | undefined;
}

Quill.register(
  {
    "formats/customembed": Embed,
  },
  true
);

export const Editor = ({
  quillProps,
  imageUploader,
  options,
  onChange,
}: EditorProps) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const quillObj: any = useRef();

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: buildContainer(options == null ? undefined : options),
        handlers: imageUploader ? { image: openModal } : {},
      },
    };
  }, [options, imageUploader]);

  const addEmbed = () => {
    const range = quillObj.current.getEditor().getSelection(true);
    const type = "customembed";
    const data = {
      msg: "hello",
    };
    quillObj.current.getEditor().insertEmbed(range.index, type, data);
  };

  return (
    <div className="main">
      <div>
        <ReactQuill
          modules={modules}
          {...quillProps}
          ref={quillObj}
          onChange={onChange}
        />

        {imageUploader && showModal && (
          <Modal
            imageUploader={imageUploader}
            quillObj={quillObj}
            closeModal={closeModal}
          />
        )}

        <button onClick={addEmbed}>Add Component</button>
      </div>
    </div>
  );
};
