import React, { ReactNode } from 'react';

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
declare const buildContainer: (options: toolbarOptions[] | null) => (Object | string[])[];

interface EditorProps {
    quillProps?: any | null;
    imageUploader: ((file: File) => Promise<string>) | undefined | null;
    ImageUploadHandler?: React.FC<{
        onFinish: (url: string) => void;
    }> | null;
    options: toolbarOptions[] | undefined | null;
    customTag: string;
    onChange: any | undefined;
}
declare const Editor: ({ quillProps, imageUploader, ImageUploadHandler, options, customTag, onChange, }: EditorProps) => JSX.Element;

interface RendererProps<CustomPropTypes = undefined> {
    renderString: string;
    customComponent?: (props: CustomPropTypes) => ReactNode;
    className?: string;
    couldHaveEmbeds?: boolean;
    customTag?: string;
}
declare function Renderer<CustomPropTypes>({ renderString, customComponent, customTag, className, couldHaveEmbeds, }: RendererProps<CustomPropTypes>): JSX.Element;

export { Editor, EditorProps, Renderer, RendererProps, buildContainer, toolbarOptions };
