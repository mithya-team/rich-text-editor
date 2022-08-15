/// <reference types="react" />
interface EditorProps {
    imageUploader: (file: File) => Promise<string>;
}
declare const Editor: (props: EditorProps) => JSX.Element;

export { Editor };
