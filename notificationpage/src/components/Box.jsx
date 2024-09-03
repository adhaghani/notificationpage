import React from "react";
import "../Styles/Box.css";
export const Box = ({ children, className }) => {
  return <div className={"Notification__Card " + className}>{children}</div>;
};
