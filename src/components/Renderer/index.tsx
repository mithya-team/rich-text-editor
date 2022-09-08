import React, { useMemo } from "react";
import { chunkOutRenderString } from "../../utils";

interface RendererProps<Delta = undefined> {
  renderString: string;
  renderer?: (props: Delta) => JSX.Element;
  separators?: { start: string; end: string };
  className?: string;
  couldHaveChunks?: boolean;
}

function Renderer<DeltaType>({
  renderString,
  renderer,
  separators,
  couldHaveChunks = true,
  className,
}: RendererProps<DeltaType>) {
  // Separate out plain html strings from object data.
  const chunkedOutRenderString = couldHaveChunks
    ? chunkOutRenderString<DeltaType>(
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
      if (renderer) return renderer(chunk);
      else {
        console.error("No renderer given but renderString has chunks.");
        return null;
      }
    });
  }, [chunkedOutRenderString, renderer]);

  return <div className={className}>{elements}</div>;
}

export default Renderer;
