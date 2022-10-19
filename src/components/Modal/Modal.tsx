import React, { useCallback, useState } from "react";
import { UploadZone } from "../UploadZone";
import "./Modal.css";

const onDefault = () => {
  return <p>Drag 'n' drop some files here, or click to select files</p>;
};

const onUploading = () => {
  return <div className="uploading">Uploading...</div>;
};

export const Modal: React.FC<{
  onFinish: (url: string) => void;
  imageUploader: (file: File) => Promise<string>;
}> = ({ onFinish, imageUploader }) => {
  return (
    <div className="backdrop">
      <div className="foreground">
        <UploadZone
          onDefault={onDefault}
          onUploading={onUploading}
          uploadTo={imageUploader}
          onFinish={onFinish}
        />
      </div>
    </div>
  );
};
