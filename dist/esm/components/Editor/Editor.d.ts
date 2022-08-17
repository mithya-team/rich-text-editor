/// <reference types="react" />
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
export interface EditorProps {
    imageUploader: (file: File) => Promise<string>;
    options: string[];
}
declare const Editor: ({ imageUploader, options }: EditorProps) => JSX.Element;
export default Editor;
