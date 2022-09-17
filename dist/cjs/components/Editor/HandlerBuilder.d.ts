import { ReactNode } from "react";
export declare type buildHandler = (imageUploader: ((file: File) => Promise<string>) | undefined | null, imageUploadHandler: ((props: {
    onFinish: (url: string) => void;
}) => ReactNode) | null, AddEmbedHandler: React.FC<{
    onFinish: (url: Object) => void;
}> | null, openEmbedHandlerModal: () => void, openImageHandlerModal: () => void) => Object;
export declare const buildHandler: buildHandler;
