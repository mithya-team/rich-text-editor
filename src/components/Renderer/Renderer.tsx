import "react-quill/dist/quill.snow.css";
import React, { useMemo } from "react";
import { chunkOutRenderString } from "../../utils";

interface RendererProps<CustomPropTypes = undefined> {
  renderString: string;
  customComponent?: React.FC;
  className?: string;
  couldHaveEmbeds?: boolean;
  customTag?: string;
}
export const Renderer = ({
  renderString,
  customComponent,
  customTag,
  className,
  couldHaveEmbeds = true,
}: RendererProps) => {
  const separators = {
    start: `<${customTag}>`,
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
      if (customComponent) return customComponent(chunk);
      else {
        console.error("No renderer given but renderString has chunks.");
        return null;
      }
    });
  }, [chunkedOutRenderString, customComponent]);
  return <div className={className}>{elements}</div>;
};
