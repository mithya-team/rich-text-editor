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
declare const buildContainer: (options: toolbarOptions[] | null, AddEmbedHandler: React.FC<{
    onFinish: (url: Object) => void;
}> | null) => (Object | string[])[];

interface EditorProps {
    quillProps?: any | null;
    imageUploader: ((file: File) => Promise<string>) | null | undefined;
    ImageUploadHandler?: React.FC<{
        onFinish: (url: string) => void;
    }> | null;
    AddEmbedHandler: React.FC<{
        onFinish: (url: Object) => void;
    }> | null;
    options: toolbarOptions[] | null | undefined;
    customTag: string;
    onChange: any | undefined;
}
declare const Editor: ({ quillProps, imageUploader, ImageUploadHandler, AddEmbedHandler, options, customTag, onChange, }: EditorProps) => JSX.Element;

interface RendererProps<CustomPropTypes = undefined> {
    renderString: string;
    customComponent: (props: CustomPropTypes) => ReactNode;
    className?: string;
    couldHaveEmbeds?: boolean;
    customTag?: string;
}
declare function Renderer<CustomPropTypes>({ renderString, customComponent, customTag, className, couldHaveEmbeds, }: RendererProps<CustomPropTypes>): JSX.Element;

export { Editor, EditorProps, Renderer, RendererProps, buildContainer, toolbarOptions };
