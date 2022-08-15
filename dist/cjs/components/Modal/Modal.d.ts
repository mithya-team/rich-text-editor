/// <reference types="react" />
import "./Modal.css";
export interface ModalProps {
    closeModal: () => void;
    imageUploader: (file: File) => Promise<string>;
    insertImage: (url: string) => void;
}
export declare const Modal: (props: ModalProps) => JSX.Element;
