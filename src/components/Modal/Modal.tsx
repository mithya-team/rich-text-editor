import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Modal.css";

export interface ModalProps {
  closeModal: () => void;
  imageUploader: (file: File) => Promise<string>;
  insertImage: (url: string) => void;
}

export const Modal = (props: ModalProps) => {
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: any) => {
    const promise = props.imageUploader(acceptedFiles[0]);
    console.log(promise);
    promise.then((url) => {
      props.insertImage(url);
      console.log("done uploading");
      setUploading(false);
      props.closeModal();
    });
    promise.catch(() => {
      console.log("error happened");
      props.closeModal();
    });
    setUploading(true);
    console.log("files uploading");
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <div className="backdrop">
      <div className="foreground">
        <div {...getRootProps({ className: "dropzone" })} className="dropzone">
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
      {uploading && <div className="uploading">Uploading...</div>}
    </div>
  );
};
