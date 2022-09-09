import React, { ReactNode, useMemo } from "react";
import { chunkOutRenderString } from "../../utils";

interface RendererProps<CustomPropTypes = undefined> {
  renderString: string;
  customComponentRenderer?: (props: CustomPropTypes) => ReactNode;
  separators?: { start: string; end: string };
  className?: string;
  couldHaveEmbeds?: boolean;
}

function Renderer<CustomProps>({
  renderString,
  customComponentRenderer,
  separators,
  couldHaveEmbeds = true,
  className,
}: RendererProps<CustomProps>) {
  // Separate out plain html strings from object data.
  const chunkedOutRenderString = couldHaveEmbeds
    ? chunkOutRenderString<CustomProps>(
        renderString,
        separators?.start,
        separators?.end
      )
    : [renderString];

  const elements = useMemo(() => {
    return chunkedOutRenderString.map((chunk) => {
      if (typeof chunk === "string") {
        return <div dangerouslySetInnerHTML={{ __html: chunk }} />;
      }
      if (customComponentRenderer) return customComponentRenderer(chunk);
      else {
        console.error("No renderer given but renderString has chunks.");
        return null;
      }
    });
  }, [chunkedOutRenderString, customComponentRenderer]);

  return <div className={className}>{elements}</div>;
}

export default Renderer;
