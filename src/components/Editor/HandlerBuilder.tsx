import { ReactNode } from "react";
export type buildHandler = (
  imageUploader: ((file: File) => Promise<string>) | undefined | null,
  imageUploadHandler:
    | ((props: { onFinish: (url: string) => void }) => ReactNode)
    | null,
  addEmbed: () => void,
  openModal: () => void,
  openImageHandlerModal: () => void
) => Object;

export const buildHandler: buildHandler = (
  imageUploader,
  imageUploadHandler,
  addEmbed,
  openModal,
  openImageHandlerModal
) => {
  let handlers: Object = { customembed: addEmbed };

  if (imageUploadHandler) {
    handlers = { ...handlers, image: openImageHandlerModal };
  } else if (imageUploader) {
    handlers = { ...handlers, image: openModal };
  }

  return handlers;
};
