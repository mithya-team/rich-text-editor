/// <reference types="react" />
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
import { toolbarOptions } from "./ModuleBuilder";
export interface EditorProps {
    id: any | undefined;
    className: any | undefined;
    value: any | undefined;
    defaultValue: any | undefined;
    readOnly: any | undefined;
    placeholder: any | undefined;
    modules: any | undefined;
    formats: any | undefined;
    style: any | undefined;
    theme: any | undefined;
    tabIndex: any | undefined;
    bounds: any | undefined;
    children: any | undefined;
    onChange: any | undefined;
    onChangeSelection: any | undefined;
    onFocus: any | undefined;
    onBlur: any | undefined;
    onKeyPress: any | undefined;
    onKeyDown: any | undefined;
    onKeyUp: any | undefined;
    preserveWhitespace: any | undefined;
    imageUploader: (file: File) => Promise<string>;
    options: toolbarOptions[];
}
export declare const Editor: ({ imageUploader, options }: EditorProps) => JSX.Element;
