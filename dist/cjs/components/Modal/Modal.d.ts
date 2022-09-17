import React from "react";
import "./Modal.css";
export declare const Modal: React.FC<{
    onFinish: (url: string) => void;
    imageUploader: (file: File) => Promise<string>;
}>;
