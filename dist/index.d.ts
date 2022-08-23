/// <reference types="react" />
declare enum toolbarOptions {
    fontStyle = 0,
    quoteCode = 1,
    headers = 2,
    list = 3,
    indentation = 4,
    font = 5,
    script = 6,
    align = 7,
    clear = 8,
    image = 9
}
declare const buildContainer: (options: toolbarOptions[] | undefined) => any;

interface EditorProps {
    quillProps: any | undefined;
    imageUploader: ((file: File) => Promise<string>) | undefined;
    options: toolbarOptions[] | undefined;
}
declare const Editor: ({ quillProps, imageUploader, options }: EditorProps) => JSX.Element;

export { Editor, EditorProps, buildContainer, toolbarOptions };
