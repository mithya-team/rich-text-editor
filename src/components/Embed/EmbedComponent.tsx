import React, { useState } from "react";
import "./EmbedComponent.css";
export const EmbedComponent = (props: any) => {
  return (
    <div className="embedded">
      <div className="title">{props.title} </div>
      <div className="subtitle">{props.subtitle}</div>
    </div>
  );
};
