import { ReactNode } from "react";
interface RendererProps<CustomPropTypes = undefined> {
    renderString: string;
    customComponentRenderer?: (props: CustomPropTypes) => ReactNode;
    separators?: {
        start: string;
        end: string;
    };
    className?: string;
    couldHaveEmbeds?: boolean;
}
declare function Renderer<CustomProps>({ renderString, customComponentRenderer, separators, couldHaveEmbeds, className, }: RendererProps<CustomProps>): JSX.Element;
export default Renderer;
