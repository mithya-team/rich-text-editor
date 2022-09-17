import { ReactNode } from "react";
export type buildHandler = (
  imageUploader: ((file: File) => Promise<string>) | undefined | null,
  imageUploadHandler:
    | ((props: { onFinish: (url: string) => void }) => ReactNode)
    | null,
  addEmbed: () => void,
  openImageHandlerModal: () => void
) => Object;

export const buildHandler: buildHandler = (
  imageUploader,
  imageUploadHandler,
  addEmbed,
  openImageHandlerModal
) => {
  let handlers: Object = { customembed: addEmbed };

  if (imageUploadHandler || imageUploader) {
    handlers = { ...handlers, image: openImageHandlerModal };
  }

  return handlers;
};
