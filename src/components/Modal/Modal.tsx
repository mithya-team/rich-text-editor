import React, { useCallback, useState } from "react";
import { UploadZone } from "../UploadZone";
import "./Modal.css";

export interface ModalProps {
  imageUploader: (file: File) => Promise<string>;
  quillObj: any;
  closeModal: () => void;
}

const onDefault = () => {
  return <p>Drag 'n' drop some files here, or click to select files</p>;
};

const onUploading = () => {
  return <div className="uploading">Uploading...</div>;
};

export const Modal = ({ imageUploader, quillObj, closeModal }: ModalProps) => {
  const insertImage = (url: string) => {
    quillObj.current.getEditor().focus();
    const range = quillObj.current.getEditor().getSelection();
    quillObj.current.getEditor().insertEmbed(range.index, "image", url);
    closeModal();
  };

  return (
    <div className="backdrop">
      <div className="foreground">
        <UploadZone
          onDefault={onDefault}
          onUploading={onUploading}
          uploadTo={imageUploader}
          onFinish={insertImage}
        />
      </div>
    </div>
  );
};
