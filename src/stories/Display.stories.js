import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { Modal } from "../components/Modal";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  const [isOpen, setIsOpen] = useState(false);
  const customTheme = {
    backgroundColorWrapper: "rgba(138, 138, 138, 0.6)",
    backgroundColormodal: "#282c34",
    colorText: "white",
    modalWidth: "40%",
    modalHeight: "25%",
    fontSize: "1.8rem",
    transitionCloseBtn:" transform 1000ms",
  };
  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Click to Open Modal</button>
      <Modal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        theme={customTheme}
      >
        Write your text here!
      </Modal>
    </div>
  );
});
