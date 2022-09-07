/// <reference types="react" />
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
import { toolbarOptions } from "./ContainerBuilder";
export interface EditorProps {
    quillProps: any | undefined | null;
    imageUploader: ((file: File) => Promise<string>) | undefined | null;
    options: toolbarOptions[] | undefined | null;
    onChange: any | undefined;
}
export declare const Editor: ({ quillProps, imageUploader, options, onChange, }: EditorProps) => JSX.Element;
