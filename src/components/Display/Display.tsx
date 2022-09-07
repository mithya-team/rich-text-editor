import React from "react";
export interface DisplayProps {
  delta: any;
}
export const Display = ({ delta }: DisplayProps) => {
  return <>hi bhai {JSON.stringify(delta)}</>;
};
