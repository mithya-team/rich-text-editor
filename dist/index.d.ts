import React, { ReactNode } from 'react';
import { ReactQuillProps } from 'react-quill';

declare enum ToolbarOptions {
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
declare const buildContainer: (options: ToolbarOptions[] | null, AddEmbedHandler: React.FC<{
    onFinish: (embedObject: Object) => void;
}> | null) => (Object | string[])[];

interface EditorProps {
    quillProps?: ReactQuillProps | null;
    imageUploader?: ((file: File) => Promise<string>) | null | undefined;
    ImageUploadHandler?: React.FC<{
        onFinish: (url: string) => void;
    }> | null;
    AddEmbedHandler?: React.FC<{
        onFinish: (embedObject: Object) => void;
    }> | null;
    EmbedPlaceholder?: React.FC | null;
    options?: ToolbarOptions[] | null | undefined;
    customTag?: string;
    className?: string;
    onChange?: ((value: string) => void) | undefined;
}
declare const Editor: ({ quillProps, imageUploader, ImageUploadHandler, AddEmbedHandler, EmbedPlaceholder, options, customTag, className, onChange, }: EditorProps) => JSX.Element;

interface RendererProps<CustomPropTypes = unknown> {
    renderString: string;
    EmbedRenderer?: (props: CustomPropTypes) => ReactNode;
    className?: string;
    couldHaveEmbeds?: boolean;
    customTag?: string;
}
declare function Renderer<CustomPropTypes>({ renderString, EmbedRenderer, customTag, className, couldHaveEmbeds, }: RendererProps<CustomPropTypes>): JSX.Element;

export { Editor, EditorProps, Renderer, RendererProps, ToolbarOptions, buildContainer };
