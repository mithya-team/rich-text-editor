/// <reference types="react" />
import { ReactNode } from 'react';

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
    customTag: string;
    onChange: any | undefined;
}
declare const Editor: ({ quillProps, imageUploader, options, customTag, onChange, }: EditorProps) => JSX.Element;

interface RendererProps<CustomPropTypes = undefined> {
    renderString: string;
    customComponent?: (props: CustomPropTypes) => ReactNode;
    className?: string;
    couldHaveEmbeds?: boolean;
    customTag?: string;
}
declare const Renderer: ({ renderString, customComponent, customTag, className, couldHaveEmbeds, }: RendererProps) => JSX.Element;

export { Editor, EditorProps, Renderer, buildContainer, toolbarOptions };
