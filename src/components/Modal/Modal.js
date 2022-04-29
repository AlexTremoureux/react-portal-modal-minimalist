import React, { useEffect } from "react";
import { ReactPortal } from "../ReactPortals";

export const Modal = ({ children, isOpen, handleClose, theme }) => {
  const {
    backgroundColorWrapper,
    backgroundColormodal,
    colorText,
    modalWidth,
    modalHeight,
  } = theme;

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className="modalWrapper">
        <div className="modal">
          <button onClick={handleClose} className="close-btn">
            &times;
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </div>
      <style jsx="true">{`
        .modalWrapper {
          position: fixed;
          inset: 0; /* inset sets all 4 values (top right bottom left) much like how we set padding, margin etc., */
          background-color: ${backgroundColorWrapper};
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          z-index: 999;
          animation: display-modal 700ms cubic-bezier(0.9, 0, 0.1, 1);
        }

        .modal {
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          width: ${modalWidth};
          height: ${modalHeight};
        }

        .modal-content {
          width: 100%;
          height: 100%;
          background-color: ${backgroundColormodal};
          color: ${colorText};
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 10px;
          font-size: 2rem;
          border-radius: 10px;
        }

        .close-btn {
          z-index: 1;
          background-color: transparent;
          color: ${colorText};
          border: none;
          width: 15%;
          height: 15%;
          margin-left: -15%;
          padding: 0;
          cursor: pointer;
          border-radius: 10px;
          font-size: 2.4rem;
          transform: rotate(0deg);
          transition: transform 1000ms;
        }

        .close-btn:hover {
          transform: rotate(360deg);
        }

        @keyframes display-modal {
          0% {
            transform: scaleY(0);
            opacity: 0.1;
          }

          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </ReactPortal>
  );
};
