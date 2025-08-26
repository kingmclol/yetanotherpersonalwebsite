import { AnimatePresence, motion } from "motion/react";
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import Button from "./Button";
// import styled from "styled-components";

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: var(--backdrop-color);
//   backdrop-filter: blur(4px);
//   z-index: 1000;
//   transition: all 0.5s;
// `;
const modalVariants = {
  initial: {
    scale: 0.75,
    opactiy: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 500,
    },
  },
  exit: {
    scale: 0.75,
    opacity: 0,
  },
};
function Overlay({ children }) {
  return (
    <div className="fixed inset-0 z-10 h-screen w-full bg-slate-900/60 backdrop-blur-xs transition-all duration-500">
      {children}
    </div>
  );
}

// const Button = styled.button`
//   background: none;
//   border: none;
//   padding: 0.4rem;
//   border-radius: var(--border-radius-sm);
//   transform: translateX(0.8rem);
//   transition: all 0.2s;
//   position: absolute;
//   top: 1.2rem;
//   right: 1.9rem;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     /* Sometimes we need both */
//     /* fill: var(--color-grey-500);
//     stroke: var(--color-grey-500); */
//     color: var(--color-grey-500);
//   }
// `;

// const Title = styled.h1`
//   margin-bottom: 2rem;
// `;

const ModalContext = createContext();

function Title({ children }) {
  return <h1 className="mb-8 text-2xl font-bold tracking-wide">{children}</h1>;
}

function Modal({ children }) {
  const [openWindowName, setOpenWindowName] = useState("");
  const open = setOpenWindowName;
  const close = () => setOpenWindowName("");
  return (
    <ModalContext.Provider
      value={{
        openWindowName,
        open,
        close,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ renderButton, target: windowName }) {
  const { open } = useContext(ModalContext);
  return renderButton(() => open(windowName));
}

// Will take either renderChildren, or children.
// renderChildren is a function which will recieve the function which closes the modal, and returns
// some JSX to place in the modal. Used if the child itself should be able to close the modal.
// children will only display if renderChildren is not provided.

// const StyledModal = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-lg);
//   box-shadow: var(--shadow-lg);
//   padding: 3.2rem 4rem;
//   transition: all 0.5s;
// `;

const overlayVariants = {
  initial: {
    backdropFilter: "blur(0px)",
    backgroundColor: "none",
  },
  animate: {
    backdropFilter: "blur(4px)",
    backgroundColor: "rgba(0,0,0, 0.5)",
  },
  exit: {
    backdropFilter: "blur(0px)",
    backgroundColor: "none",
  },
};
function Window({ name, renderChildren, titleText, children }) {
  const { close, openWindowName } = useContext(ModalContext);
  const isWindowOpen = name === openWindowName;
  function handleOverlayClick() {
    close();
  }
  return createPortal(
    <AnimatePresence>
      {isWindowOpen && (
        <motion.div
          key={name}
          className="fixed inset-0 z-10 h-screen w-full"
          onClick={handleOverlayClick}
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            variants={modalVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-1/2 left-1/2 min-h-80 min-w-2xl -translate-1/2 transform rounded-xl border-2 border-slate-700 bg-slate-900 px-8 py-12 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              className="fixed top-2 right-2 flex p-1 items-center justify-center rounded-full hover:bg-slate-700"
              onClick={close}
            >
              <HiXMark className="h-8 w-8" />
            </Button>
            {titleText && <Title>{titleText}</Title>}
            {renderChildren ? renderChildren(close) : children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
