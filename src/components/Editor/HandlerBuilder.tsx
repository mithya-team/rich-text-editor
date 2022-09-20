import { ReactNode } from "react";
export type buildHandler = (
  imageUploader: ((file: File) => Promise<string>) | undefined | null,
  ImageUploadHandler:
    | ((props: { onFinish: (url: string) => void }) => ReactNode)
    | null,
  AddEmbedHandler: React.FC<{ onFinish: (embedObject: Object) => void }> | null,
  openEmbedHandlerModal: () => void,
  openImageHandlerModal: () => void
) => Object;

export const buildHandler: buildHandler = (
  imageUploader,
  ImageUploadHandler,
  AddEmbedHandler,
  openEmbedHandlerModal,
  openImageHandlerModal
) => {
  let handlers: Object = {};

  if (ImageUploadHandler || imageUploader) {
    handlers = { ...handlers, image: openImageHandlerModal };
  }

  if (AddEmbedHandler)
    handlers = { ...handlers, customembed: openEmbedHandlerModal };

  return handlers;
};
