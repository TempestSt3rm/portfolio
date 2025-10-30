import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-2xl font-medium transition " +
    "focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background " +
    "disabled:opacity-60 disabled:cursor-not-allowed";

  let variantClasses = "";
  if (variant === "solid") {
    variantClasses =
      "bg-secondary text-[#0b1017] hover:bg-secondary/90 active:bg-secondary/80 shadow-sm";
  } else if (variant === "outline") {
    variantClasses =
      "border border-secondary/80 text-secondary hover:bg-secondary/10 active:bg-secondary/15";
  } else if (variant === "ghost") {
    variantClasses =
      "text-secondary hover:bg-secondary/10 active:bg-secondary/15";
  }

  let sizeClasses = "";
  if (size === "sm") sizeClasses = "px-3 py-1.5 text-sm";
  if (size === "md") sizeClasses = "px-4 py-2 text-base";
  if (size === "lg") sizeClasses = "px-5 py-3 text-lg";

  const finalClassName = `${base} ${variantClasses} ${sizeClasses} ${className}`;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
};
