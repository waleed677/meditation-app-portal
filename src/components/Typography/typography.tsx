import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  type:
    | "title"
    | "title2"
    | "title3"
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "paragraph1"
    | "paragraph1Bold"
    | "button"
    | "paragraph2"
    | "paragraph2bold"
    | "paragraph2Light"
    | "caption"
    | "inputLabel";
  style?: React.CSSProperties; // Allow inline styles
  className?: string; // Allow inline styles
}

const Typography: React.FC<TypographyProps> = ({
  children,
  type,
  style,
  className,
}) => {
  const getTextStyle = (type: string): string => {
    switch (type) {
      case "title":
        return "text-3xl font-bold leading-tight"; // Tailwind classes for title
      case "title2":
        return "text-2xl font-bold leading-tight"; // Tailwind classes for title2
      case "title3":
        return "text-xl font-bold leading-tight"; // Tailwind classes for title3
      case "subtitle1":
        return "text-2xl font-normal leading-tight"; // Tailwind classes for subtitle1
      case "subtitle2":
        return "text-xl font-normal leading-tight"; // Tailwind classes for subtitle2
      case "subtitle3":
        return "text-xl font-medium leading-tight"; // Tailwind classes for subtitle3
      case "paragraph1":
        return "text-base font-normal leading-relaxed"; // Tailwind classes for paragraph1
      case "paragraph1Bold":
        return "text-base font-bold leading-relaxed"; // Tailwind classes for paragraph1Bold
      case "button":
        return "text-sm font-bold leading-tight"; // Tailwind classes for button
      case "paragraph2":
        return "text-xs font-normal leading-tight"; // Tailwind classes for paragraph2
      case "paragraph2bold":
        return "text-xs font-bold leading-tight"; // Tailwind classes for paragraph2bold
      case "paragraph2Light":
        return "text-xs font-light leading-tight"; // Tailwind classes for paragraph2Light
      case "caption":
        return "text-xs font-normal leading-tight"; // Tailwind classes for caption
      case "inputLabel":
        return "text-base font-normal leading-relaxed"; // Tailwind classes for inputLabel
      default:
        return "text-base font-normal leading-relaxed"; // Default style
    }
  };

  // Get the correct Tailwind class for the selected type
  const textStyle = getTextStyle(type);

  return (
    <div className={`${textStyle} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Typography;
