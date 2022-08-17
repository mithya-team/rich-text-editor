/// <reference types="react" />
import "./Modal.css";
export interface ModalProps {
    imageUploader: (file: File) => Promise<string>;
    insertImage: (url: string) => void;
}
export declare const Modal: ({ imageUploader, insertImage }: ModalProps) => JSX.Element;
