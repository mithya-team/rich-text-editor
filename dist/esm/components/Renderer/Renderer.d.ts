import "react-quill/dist/quill.snow.css";
import React from "react";
interface RendererProps<CustomPropTypes = undefined> {
    renderString: string;
    customComponent?: React.FC;
    className?: string;
    couldHaveEmbeds?: boolean;
    customTag?: string;
}
export declare const Renderer: ({ renderString, customComponent, customTag, className, couldHaveEmbeds, }: RendererProps) => JSX.Element;
export {};
