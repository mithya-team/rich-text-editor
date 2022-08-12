import React from "react";
import "./Editor.css";

export interface EditorProps {
  label: string;
}

const Editor = (props: EditorProps) => {
  return (
    <div className="main">
      <div>{props.label}</div>
    </div>
  );
};

export default Editor;
