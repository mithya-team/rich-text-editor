import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import parse from "html-react-parser";
import { EmbedComponent } from "../Embed/EmbedComponent";

import React, { ReactNode, useMemo } from "react";
import { chunkOutRenderString } from "../../utils";

interface RendererProps<CustomPropTypes = undefined> {
  renderString: string;
  customComponentRenderer?: React.FC;
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
    console.log("elements rendered");
    console.log(chunkedOutRenderString);
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

export interface DisplayProps {
  delta: string;
  customComponent: React.FC | undefined;
}
export const Display = ({ delta, customComponent }: DisplayProps) => {
  return (
    <>
      <Renderer
        renderString={delta}
        separators={{ start: "<x>", end: "</x>" }}
        customComponentRenderer={customComponent}
      />
    </>
  );
};
