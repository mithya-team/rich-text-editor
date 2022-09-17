import React, { ReactNode, useMemo, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Modal } from "../Modal";
import "./Editor.css";
import { buildContainer, toolbarOptions } from "./ContainerBuilder";
import { Embed } from "../Embed";
import { buildHandler } from "./HandlerBuilder";

export interface EditorProps {
  quillProps?: any | null;
  imageUploader: ((file: File) => Promise<string>) | undefined | null;
  ImageUploadHandler?: React.FC<{ onFinish: (url: string) => void }> | null;
  options: toolbarOptions[] | undefined | null;
  customTag: string;
  onChange: any | undefined;
}

export const Editor = ({
  quillProps = null,
  imageUploader = null,
  ImageUploadHandler = null,
  options = null,
  customTag = "default",
  onChange,
}: EditorProps) => {
  Quill.register(
    {
      "formats/customembed": class NewEmbed extends Embed {
        static tagName = customTag;
      },
    },
    true
  );

  const [showModal, setShowModal] = useState(false);
  const [showImageHandler, setShowImageHandler] = useState(false);
  const openImageHandlerModal = () => {
    setShowImageHandler(true);
  };
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const quillObj = useRef<ReactQuill>();

  const insertImage = (url: string) => {
    if (!quillObj || !quillObj.current) return;
    const range = quillObj.current.getEditor().getSelection(true);
    quillObj.current.getEditor().insertEmbed(range.index, "image", url);
    setShowImageHandler(false);
  };

  const addEmbed = () => {
    if (!quillObj || !quillObj.current) return;
    const range = quillObj.current.getEditor().getSelection(true);
    const type = "customembed";
    quillObj.current
      .getEditor()
      .insertEmbed(range.index, type, { tag: customTag });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: buildContainer(options),
        handlers: buildHandler(
          imageUploader,
          ImageUploadHandler,
          addEmbed,
          openModal,
          openImageHandlerModal
        ),
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

        {ImageUploadHandler && showImageHandler && (
          <ImageUploadHandler onFinish={insertImage} />
        )}

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
