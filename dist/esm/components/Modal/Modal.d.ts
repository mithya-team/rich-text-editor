/// <reference types="react" />
import "./Modal.css";
export interface ModalProps {
    imageUploader: (file: File) => Promise<string>;
    quillObj: any;
    closeModal: () => void;
}
export declare const Modal: ({ imageUploader, quillObj, closeModal }: ModalProps) => JSX.Element;
