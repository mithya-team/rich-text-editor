import { ReactNode } from "react";
export declare type buildHandler = (imageUploader: ((file: File) => Promise<string>) | undefined | null, ImageUploadHandler: ((props: {
    onFinish: (url: string) => void;
}) => ReactNode) | null, AddEmbedHandler: React.FC<{
    onFinish: (embedObject: Object) => void;
}> | null, openEmbedHandlerModal: () => void, openImageHandlerModal: () => void) => Record<string, any>;
export declare const buildHandler: buildHandler;
