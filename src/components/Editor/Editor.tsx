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
  const quillObj = useRef<ReactQuill>();

  const addEmbed = () => {
    if (!quillObj || !quillObj.current) return;
    const range = quillObj.current.getEditor().getSelection(true);
    const type = "customembed";
    quillObj.current.getEditor().insertEmbed(range.index, type, {});
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: buildContainer(options == null ? undefined : options),
        handlers: imageUploader
          ? { image: openModal, customembed: addEmbed }
          : { customembed: addEmbed },
      },
    };
  }, [options, imageUploader]);

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
      </div>
    </div>
  );
};
