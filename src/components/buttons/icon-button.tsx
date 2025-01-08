import { Button } from "antd";
import React, { ReactNode } from "react";

interface IconButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  titleClassName?: string;
  bg?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  text = "",
  onClick = () => console.log("Button pressed"),
  className = "",
  titleClassName = "",
  rightIcon,
  leftIcon,
  bg = "#000",
}) => {
  const buttonStyle = `p-4 rounded-xl h-10 flex items-center justify-center gap-2 flex-row`;

  const buttonTitleStyle = `text-white text-base font-bold leading-6`;

  return (
    <Button
      onClick={onClick}
      style={{ backgroundColor: bg, borderColor: bg }}
      className={`${buttonStyle} ${className}`}
    >
      {leftIcon && <div className="mb-1">{leftIcon}</div>}{" "}
      <span className={`${buttonTitleStyle} ${titleClassName}`}>{text}</span>
      {rightIcon && <div>{rightIcon}</div>}
    </Button>
  );
};

export default IconButton;
