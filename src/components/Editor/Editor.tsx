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
  AddEmbedHandler: React.FC<{ onFinish: (url: Object) => void }> | null;
  options: toolbarOptions[] | undefined | null;
  customTag: string;
  onChange: any | undefined;
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
  const quillObj = useRef<ReactQuill>();

  const insertImage = (url: string) => {
    if (!quillObj || !quillObj.current) return;
    const range = quillObj.current.getEditor().getSelection(true);
    quillObj.current.getEditor().insertEmbed(range.index, "image", url);
    setShowImageHandler(false);
  };

  const addEmbed = (data: Object) => {
    if (!quillObj || !quillObj.current) return;
    const range = quillObj.current.getEditor().getSelection(true);
    const type = "customembed";
    quillObj.current.getEditor().insertEmbed(range.index, type, data);
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
