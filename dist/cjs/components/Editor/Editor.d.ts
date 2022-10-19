import React from "react";
import { ReactQuillProps } from "react-quill";
import { ToolbarOptions } from "./ContainerBuilder";
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
export interface EditorProps {
    quillProps?: ReactQuillProps | null;
    imageUploader?: ((file: File) => Promise<string>) | null | undefined;
    ImageUploadHandler?: React.FC<{
        onFinish: (url: string) => void;
    }> | null;
    AddEmbedHandler?: React.FC<{
        onFinish: (embedObject: Object) => void;
    }> | null;
    EmbedPlaceholder?: React.FC | null;
    options?: ToolbarOptions[] | null | undefined;
    customTag?: string;
    className?: string;
    onChange?: ((value: string) => void) | undefined;
}
export declare const Editor: ({ quillProps, imageUploader, ImageUploadHandler, AddEmbedHandler, EmbedPlaceholder, options, customTag, className, onChange, }: EditorProps) => JSX.Element;
