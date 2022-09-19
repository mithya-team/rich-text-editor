import React from "react";
import { toolbarOptions } from "./ContainerBuilder";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
export interface EditorProps {
    quillProps?: any | null;
    imageUploader: ((file: File) => Promise<string>) | null | undefined;
    ImageUploadHandler?: React.FC<{
        onFinish: (url: string) => void;
    }> | null;
    AddEmbedHandler: React.FC<{
        onFinish: (url: Object) => void;
    }> | null;
    options: toolbarOptions[] | null | undefined;
    customTag: string;
    onChange: any | undefined;
}
export declare const Editor: ({ quillProps, imageUploader, ImageUploadHandler, AddEmbedHandler, options, customTag, onChange, }: EditorProps) => JSX.Element;
