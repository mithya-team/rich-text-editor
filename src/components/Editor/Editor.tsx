import React from "react";

export interface EditorProps {
  label: string;
}

const Editor = (props: EditorProps) => {
  return <div>{props.label}</div>;
};

export default Editor;
