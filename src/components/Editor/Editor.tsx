import React, { useMemo, useRef, useState } from "react";
import ReactQuill, { ReactQuillProps, Quill } from "react-quill";
import { Modal } from "../Modal";
import { buildContainer, ToolbarOptions } from "./ContainerBuilder";
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
  EmbedPlaceholder?: React.FC | null;
  options?: ToolbarOptions[] | null | undefined;
  customTag?: string;
  className?: string;
  onChange?: ((value: string) => void) | undefined;
}

export const Editor = ({
  quillProps = null,
  imageUploader = null,
  ImageUploadHandler = null,
  AddEmbedHandler = null,
  EmbedPlaceholder = null,
  options = null,
  customTag = "default",
  className = "editor-main",
  onChange,
}: EditorProps) => {
  if (AddEmbedHandler) {
    Quill.register(
      {
        "formats/customembed": class NewEmbed extends Embed {
          static tagName = customTag;
        },
      },
      true
    );
  }

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
    if (JSON.stringify(embedObject) == "{}") {
      setEmbedHandler(false);
      return;
    }
    const range = quillObj.current.getEditor().getSelection(true);
    const type = "customembed";
    quillObj.current
      .getEditor()
      .insertEmbed(range.index, type, [embedObject, EmbedPlaceholder]);
    setEmbedHandler(false);
  };

  const ImageModalBox = useMemo(() => {
    if (showImageHandler) {
      if (ImageUploadHandler)
        return <ImageUploadHandler onFinish={insertImage} />;
      else if (imageUploader)
        return <Modal imageUploader={imageUploader} onFinish={insertImage} />;
    } else return "";
  }, [showImageHandler, ImageUploadHandler, imageUploader]);

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
    <div className={className}>
      <div>
        <ReactQuill
          modules={modules}
          {...quillProps}
          ref={quillObj}
          onChange={onChange}
        />
        {ImageModalBox}

        {AddEmbedHandler && showEmbedHandler && (
          <AddEmbedHandler onFinish={addEmbed} />
        )}
      </div>
    </div>
  );
};
