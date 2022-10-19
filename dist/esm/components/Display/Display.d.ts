import "react-quill/dist/quill.snow.css";
import React from "react";
interface RendererProps<CustomPropTypes = undefined> {
    renderString: string;
    customComponentRenderer?: React.FC;
    separators?: {
        start: string;
        end: string;
    };
    className?: string;
    couldHaveEmbeds?: boolean;
}
declare function Renderer<CustomProps>({ renderString, customComponentRenderer, separators, couldHaveEmbeds, className, }: RendererProps<CustomProps>): JSX.Element;
export default Renderer;
export interface DisplayProps {
    delta: string;
    customComponent: React.FC | undefined;
}
export declare const Display: ({ delta, customComponent }: DisplayProps) => JSX.Element;
