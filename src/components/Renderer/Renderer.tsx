import "react-quill/dist/quill.snow.css";
import React, { ReactNode, useMemo } from "react";
import { chunkOutRenderString } from "../../utils";

export interface RendererProps<CustomPropTypes = unknown> {
  renderString: string;
  EmbedRenderer?: (props: CustomPropTypes) => ReactNode;
  className?: string;
  couldHaveEmbeds?: boolean;
  customTag?: string;
}
export function Renderer<CustomPropTypes>({
  renderString,
  EmbedRenderer,
  customTag = "default",
  className = "",
  couldHaveEmbeds = true,
}: RendererProps<CustomPropTypes>) {
  const separators = {
    start: `<${customTag} content-editable="false">`,
    end: `</${customTag}>`,
  };
  const chunkedOutRenderString = couldHaveEmbeds
    ? chunkOutRenderString(renderString, separators)
    : [renderString];

  const elements = useMemo(() => {
    return chunkedOutRenderString.map((chunk: any) => {
      if (typeof chunk === "string") {
        return <div dangerouslySetInnerHTML={{ __html: chunk }} />;
      }
      if (EmbedRenderer) return EmbedRenderer(chunk);
      else {
        console.error("No renderer given but renderString has chunks.");
        return null;
      }
    });
  }, [chunkedOutRenderString, EmbedRenderer]);

  console.log(elements);
  return <div className={className}>{elements}</div>;
}
export default Renderer;
