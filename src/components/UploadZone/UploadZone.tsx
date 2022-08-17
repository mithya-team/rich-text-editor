import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export interface UploadZoneProps {
  onDefault: () => JSX.Element;
  onUploading: () => JSX.Element;
  onFinish: (url: string) => void;
  uploadTo: (file: File) => Promise<string>;
}

export const UploadZone = ({
  onDefault,
  onUploading,
  onFinish,
  uploadTo,
}: UploadZoneProps) => {
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: any) => {
    setUploading(true);
    const url = await uploadTo(acceptedFiles[0]);
    onFinish(url);
    setUploading(false);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  if (!uploading)
    return (
      <div {...getRootProps({ className: "dropzone" })} className="dropzone">
        <input {...getInputProps()} />
        {onDefault()}
      </div>
    );
  else return onUploading();
};
