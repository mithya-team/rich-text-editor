import "react-quill/dist/quill.snow.css";
import { ReactNode } from "react";
interface RendererProps<CustomPropTypes = undefined> {
    renderString: string;
    customComponent?: (props: CustomPropTypes) => ReactNode;
    className?: string;
    couldHaveEmbeds?: boolean;
    customTag?: string;
}
export declare const Renderer: ({ renderString, customComponent, customTag, className, couldHaveEmbeds, }: RendererProps) => JSX.Element;
export {};
