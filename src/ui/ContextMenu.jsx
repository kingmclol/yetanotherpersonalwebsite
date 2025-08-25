import { createContext, useContext, useRef, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
// import styled from "styled-components";
import { useOutsideClick } from "../hooks/useOutsideClick.js";
import { AnimatePresence } from "motion/react";

// This did not translate over well
// Will look at later

// const StyledMenu = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   position: relative;
// `;

function Menu({ children }) {
  return (
    <AnimatePresence>
      <div className="relative flex items-center justify-end">{children}</div>
    </AnimatePresence>
  );
}
// const StyledToggle = styled.button`
//   background: none;
//   border: none;
//   padding: 0.4rem;
//   border-radius: var(--border-radius-sm);
//   transform: translateX(0.8rem);
//   transition: all 0.2s;

//   &:hover {
//     background-color: var(--color-grey-100);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     color: var(--color-grey-700);
//   }
// `;

function Toggle({ id }) {
  const { open, close, openId, setPosition } = useContext(MenuContext);
  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
		console.log(rect)
    setPosition({
      x: -8,
      y: rect.height,
    });
    if (openId === id) close();
    else open(id);
  }
  return (
    <button
      className="translate-x-[0.8rem] rounded-sm border-none bg-none p-[0.4rem] hover:bg-slate-500"
      onClick={handleClick}
    >
      <HiEllipsisVertical className="h-[2.4rem] w-[2.4rem] text-gray-700" />
    </button>
  );
}

// const StyledList = styled.ul`
//   position: absolute;
//   z-index: 1;
//   background-color: var(--color-grey-0);
//   box-shadow: var(--shadow-md);
//   border-radius: var(--border-radius-md);

//   right: ${(props) => props.$position.x}px;
//   top: ${(props) => props.$position.y}px;
// `;

function List({ children, id }) {
  const { openId, position, openMenuRef } = useContext(MenuContext);

  if (openId !== id) return null;
  return (
    <div
      className={`absolute z-10 rounded-md bg-slate-50 shadow-md r-[${position.x}px] t-[${position.y}px]`}
      ref={openMenuRef}
      $position={position}
    >
      {children}
    </div>
  );
}

// const StyledButton = styled.button`
//   width: 100%;
//   min-width: max-content;
//   text-align: left;
//   background: none;
//   border: none;
//   padding: 1.2rem 2.4rem;
//   font-size: 1.4rem;
//   transition: all 0.2s;

//   display: flex;
//   align-items: center;
//   gap: 1.6rem;

//   &:hover {
//     background-color: var(--color-grey-50);
//   }

//   & svg {
//     width: 1.6rem;
//     height: 1.6rem;
//     color: var(--color-grey-400);
//     transition: all 0.3s;
//   }
// `;

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <div
        className="flex w-full min-w-max items-center gap-6 border-none bg-none px-[2.4rem] py-[1.2rem] text-left text-[1.4rem] transition-colors duration-200 hover:bg-slate-50"
        onClick={handleClick}
      >
        {icon}
        <span>{children}</span>
      </div>
    </li>
  );
}

const MenuContext = createContext();

function ContextMenu({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState({});
  const open = setOpenId;
  const close = () => setOpenId("");
  const openMenuRef = useRef();
  useOutsideClick(openMenuRef, close);
  return (
    <MenuContext.Provider
      value={{ openId, open, close, position, setPosition, openMenuRef }}
    >
      {children}
    </MenuContext.Provider>
  );
}
ContextMenu.Menu = Menu;
ContextMenu.Toggle = Toggle;
ContextMenu.List = List;
ContextMenu.Button = Button;
export default ContextMenu;
