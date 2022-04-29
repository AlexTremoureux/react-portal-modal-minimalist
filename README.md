# react-portal-modal-minimalist

## About

A simple component build for React projects.

## Installation

You can install this component with npm or yarn:

    npm i react-portal-modal-minimalist

or

    yarn add react-portal-modal-minimalist

## How to use component

Start by Import the component in your file:

    import { Modal } from "react-portal-modal-minimalist";

Define the theme of the component with: 

    const customTheme = {
    backgroundColorWrapper: "rgba(138, 138, 138, 0.6)",
    backgroundColormodal: "#282c34",
    colorText: "white",
    modalWidth: "60%",
    modalHeight: "60%",
  };

Initialize the state of Modal opening: 
```js
const [isOpen, setIsOpen] = useState(false);
```

Call your component:
```js
{isOpen && (
    <Modal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        theme={customTheme}
    >
        Employee is created!
    </Modal>
)}
```

Example:
```js
const App = () => {
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
};
```