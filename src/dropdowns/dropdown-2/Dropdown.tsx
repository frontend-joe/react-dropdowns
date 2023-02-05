import { FC, ReactNode, RefObject, useRef, useState } from "react";
import "./styles.css";

type IconProps = {
  children: ReactNode;
  className?: string;
  iconRef?: RefObject<HTMLSpanElement>;
};

const Icon: FC<IconProps> = ({ children, iconRef, className }) => (
  <span
    ref={iconRef}
    className={`${className || ""} material-symbols-outlined`}
  >
    {children}
  </span>
);

export const Dropdown = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chevronRef = useRef<HTMLSpanElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuTop, setMenuTop] = useState<string>();
  const [menuRight, setMenuRight] = useState<string>();

  const handleClick = () => {
    const buttonRect = buttonRef?.current?.getBoundingClientRect();
    const chevronRect = chevronRef?.current?.getBoundingClientRect();

    if (buttonRect && chevronRect && isOpen) {
      const menuRight = buttonRect.right - chevronRect.right;
      const menuTop = chevronRect.top - buttonRect.top;
      setMenuRight(`${menuRight}px`);
      setMenuTop(`${menuTop}px`);
    } else {
      setMenuRight("0");
      setMenuTop("78px");
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button ref={buttonRef} onClick={handleClick}>
        <Icon>account_circle</Icon>
        <span>Preferences</span>
        <Icon
          iconRef={chevronRef}
          className="chevron material-symbols-outlined"
        >
          {isOpen ? "close" : "expand_more"}
        </Icon>
      </button>
      <div
        className={`menu ${isOpen ? "open" : ""}`}
        style={{ right: menuRight, top: menuTop }}
      >
        <button>
          <Icon>dark_mode</Icon>
          <span>Dark Mode</span>
        </button>
        <button>
          <Icon>widgets</Icon>
          <span>Widgets</span>
        </button>
        <button>
          <Icon>lock</Icon>
          <span>Account</span>
        </button>
      </div>
    </div>
  );
};
