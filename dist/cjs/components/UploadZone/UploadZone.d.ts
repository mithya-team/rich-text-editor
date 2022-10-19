/// <reference types="react" />
export interface UploadZoneProps {
    onDefault: () => JSX.Element;
    onUploading: () => JSX.Element;
    onFinish: (url: string) => void;
    uploadTo: (file: File) => Promise<string>;
}
export declare const UploadZone: ({ onDefault, onUploading, onFinish, uploadTo, }: UploadZoneProps) => JSX.Element;
