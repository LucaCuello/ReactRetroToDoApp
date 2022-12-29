import React from "react";

export const Container = ({ classList, children }) => {
  return <div className={classList}>{children}</div>;
};
