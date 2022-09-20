import React, { useMemo, useRef, useState } from "react";
import ReactQuill, { ReactQuillProps, Quill } from "react-quill";
import { Modal } from "../Modal";
import { buildContainer, toolbarOptions } from "./ContainerBuilder";
import { buildHandler } from "./HandlerBuilder";
import { Embed } from "../Embed";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";

export interface EditorProps {
  quillProps?: ReactQuillProps | null;
  imageUploader?: ((file: File) => Promise<string>) | null | undefined;
  ImageUploadHandler?: React.FC<{ onFinish: (url: string) => void }> | null;
  AddEmbedHandler?: React.FC<{
    onFinish: (embedObject: Object) => void;
  }> | null;
  options?: toolbarOptions[] | null | undefined;
  customTag?: string;
  onChange?: ((value: string) => void) | undefined;
}

export const Editor = ({
  quillProps = null,
  imageUploader = null,
  ImageUploadHandler = null,
  AddEmbedHandler = null,
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

  const [showImageHandler, setShowImageHandler] = useState(false);
  const [showEmbedHandler, setEmbedHandler] = useState(false);

  const openImageHandlerModal = () => {
    setShowImageHandler(true);
  };
  const openEmbedHandlerModal = () => {
    setEmbedHandler(true);
  };

  const quillObj: React.LegacyRef<ReactQuill> | null =
    useRef<ReactQuill | null>(null);

  const insertImage = (url: string) => {
    if (!quillObj || !quillObj.current) return;
    const range = quillObj.current.getEditor().getSelection(true);
    quillObj.current.getEditor().insertEmbed(range.index, "image", url);
    setShowImageHandler(false);
  };

  const addEmbed = (embedObject: Object) => {
    if (!quillObj || !quillObj.current) return;
    const range = quillObj.current.getEditor().getSelection(true);
    const type = "customembed";
    quillObj.current.getEditor().insertEmbed(range.index, type, embedObject);
    setEmbedHandler(false);
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: buildContainer(options, AddEmbedHandler),
        handlers: buildHandler(
          imageUploader,
          ImageUploadHandler,
          AddEmbedHandler,
          openEmbedHandlerModal,
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

        {showImageHandler &&
          (ImageUploadHandler ? (
            <ImageUploadHandler onFinish={insertImage} />
          ) : (
            imageUploader && (
              <Modal imageUploader={imageUploader} onFinish={insertImage} />
            )
          ))}

        {AddEmbedHandler && showEmbedHandler && (
          <AddEmbedHandler onFinish={addEmbed} />
        )}
      </div>
    </div>
  );
};
