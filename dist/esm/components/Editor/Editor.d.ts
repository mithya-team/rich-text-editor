/// <reference types="react" />
import "react-quill/dist/quill.snow.css";
import "./Editor.css";
export interface EditorProps {
    imageUploader: (file: File) => Promise<string>;
}
declare const Editor: (props: EditorProps) => JSX.Element;
export default Editor;
