import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

// create a wrapper for modal with custom id
const createWrapperAndAppendToBody = (wrapperId) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

export const ReactPortal = ({
  children,
  wrapperId = "react-portal-wrapper",
}) => {
  const [wrapperElement, setWrapperElement] = useState(null);

  // useLayoutEffect because DOM mutation
  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreatedElement = false;
    // if element is not found with wrapperId we create him and append to body
    if (!element) {
      systemCreatedElement = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);
    return () => {
      // if we had createWrapperAndAppendToBody, delete the created element
      if (systemCreatedElement && element.parentNode) {
        console.log(element.parentNode);
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  // wrapperElement state will be null on very first render.
  if (wrapperElement === null) return null;
  return createPortal(children, wrapperElement);
};
