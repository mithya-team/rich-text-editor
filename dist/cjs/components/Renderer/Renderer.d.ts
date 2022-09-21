import "react-quill/dist/quill.snow.css";
import { ReactNode } from "react";
export interface RendererProps<CustomPropTypes = unknown> {
    renderString: string;
    EmbedRenderer?: (props: CustomPropTypes) => ReactNode;
    className?: string;
    couldHaveEmbeds?: boolean;
    customTag?: string;
}
export declare function Renderer<CustomPropTypes>({ renderString, EmbedRenderer, customTag, className, couldHaveEmbeds, }: RendererProps<CustomPropTypes>): JSX.Element;
export default Renderer;
