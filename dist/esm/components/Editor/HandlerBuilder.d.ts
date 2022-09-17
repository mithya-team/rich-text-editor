import { ReactNode } from "react";
export declare type buildHandler = (imageUploader: ((file: File) => Promise<string>) | undefined | null, imageUploadHandler: ((props: {
    onFinish: (url: string) => void;
}) => ReactNode) | null, addEmbed: () => void, openImageHandlerModal: () => void) => Object;
export declare const buildHandler: buildHandler;
