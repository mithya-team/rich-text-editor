import { ReactNode } from "react";
export type buildHandler = (
  imageUploader: ((file: File) => Promise<string>) | undefined | null,
  imageUploadHandler:
    | ((props: { onFinish: (url: string) => void }) => ReactNode)
    | null,
  AddEmbedHandler: React.FC<{ onFinish: (url: Object) => void }> | null,
  openEmbedHandlerModal: () => void,
  openImageHandlerModal: () => void
) => Object;

export const buildHandler: buildHandler = (
  imageUploader,
  imageUploadHandler,
  AddEmbedHandler,
  openEmbedHandlerModal,
  openImageHandlerModal
) => {
  let handlers: Object = {};

  if (imageUploadHandler || imageUploader) {
    handlers = { ...handlers, image: openImageHandlerModal };
  }

  if (AddEmbedHandler)
    handlers = { ...handlers, customembed: openEmbedHandlerModal };

  return handlers;
};
