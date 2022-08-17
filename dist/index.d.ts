/// <reference types="react" />
interface EditorProps {
    imageUploader: (file: File) => Promise<string>;
    options: string[];
}
declare const Editor: ({ imageUploader, options }: EditorProps) => JSX.Element;

export { Editor };
