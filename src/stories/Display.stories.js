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
    modalWidth: "60%",
    modalHeight: "60%",
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
