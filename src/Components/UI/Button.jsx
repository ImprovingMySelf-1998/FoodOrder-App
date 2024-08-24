import React from "react";

function Button({ textOnly, className, children, ...rest }) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;
  return <button className={cssClasses} {...rest}>{children}</button>;
}

export default Button;
