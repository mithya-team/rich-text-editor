import React from "react";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
import { toolbarOptions } from "./ContainerBuilder";
export interface EditorProps {
    quillProps?: any | null;
    imageUploader: ((file: File) => Promise<string>) | undefined | null;
    ImageUploadHandler?: React.FC<{
        onFinish: (url: string) => void;
    }> | null;
    options: toolbarOptions[] | undefined | null;
    customTag: string;
    onChange: any | undefined;
}
export declare const Editor: ({ quillProps, imageUploader, ImageUploadHandler, options, customTag, onChange, }: EditorProps) => JSX.Element;
