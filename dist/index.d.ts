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
    clear = 8
}
declare const buildModule: (modules: any, options: toolbarOptions[]) => any;

interface EditorProps {
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
declare const Editor: ({ imageUploader, options }: EditorProps) => JSX.Element;

export { Editor, EditorProps, buildModule, toolbarOptions };
