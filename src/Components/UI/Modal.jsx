import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal(props) {
  const dialog = useRef();
  useEffect(() => {
    if (props.open) {
      dialog.current.showModal();
    }
    return () => {
      dialog.current.close();
    };
  }, [props.open]);
  return createPortal(
    <dialog ref={dialog} className={`modal ${props.className}`} onClose={props.onClose}>
      {props.children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
