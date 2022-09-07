import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal } from "../Modal";
import "./Editor.css";
import { buildContainer, toolbarOptions } from "./ContainerBuilder";

export interface EditorProps {
  quillProps: any | undefined | null;
  imageUploader: ((file: File) => Promise<string>) | undefined | null;
  options: toolbarOptions[] | undefined | null;
  onChange: any | undefined;
}

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
