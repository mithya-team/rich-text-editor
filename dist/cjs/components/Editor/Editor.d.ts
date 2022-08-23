/// <reference types="react" />
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
import { toolbarOptions } from "./ContainerBuilder";
export interface EditorProps {
    quillProps: any | undefined;
    imageUploader: ((file: File) => Promise<string>) | undefined;
    options: toolbarOptions[] | undefined;
}
export declare const Editor: ({ quillProps, imageUploader, options }: EditorProps) => JSX.Element;
