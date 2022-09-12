/// <reference types="react" />
import React from 'react';

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
declare const buildContainer: (options: toolbarOptions[] | undefined) => (Object | string[])[];

interface EditorProps {
    quillProps: any | undefined | null;
    imageUploader: ((file: File) => Promise<string>) | undefined | null;
    options: toolbarOptions[] | undefined | null;
    onChange: any | undefined;
}
declare const Editor: ({ quillProps, imageUploader, options, onChange, }: EditorProps) => JSX.Element;

interface DisplayProps {
    delta: string;
    customComponent: React.FC | undefined;
}
declare const Display: ({ delta, customComponent }: DisplayProps) => JSX.Element;

export { Display, DisplayProps, Editor, EditorProps, buildContainer, toolbarOptions };
