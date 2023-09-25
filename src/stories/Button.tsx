import React from "react";

interface ButtonProps {
  color: "white" | "black" | "blue" | "green" | "red";
  label: string;
  additionalClass?: string;
  onClick?: () => void;
}

function getClassButton(color: string) {
  switch (color) {
    case "white":
      return "bg-white hover:bg-black text-black hover:text-white border-solid border-2 border-black";
      break;

    case "black":
      return "bg-black hover:bg-white text-white hover:text-black border-2 border-black";
      break;

    case "blue":
      return "bg-blue-500 hover:bg-blue-700 text-white border-2 border-blue-500 hover:border-blue-700";
      break;

    case "green":
      return "bg-green-500 hover:bg-green-700 text-white border-2 border-green-500 hover:border-green-700";
      break;

    case "red":
      return "bg-red-500 hover:bg-red-700 text-white border-2 border-red-500 hover:border-red-700";
      break;
  }
}

export const Button = ({
  color = "white",
  label,
  additionalClass,
  ...props
}: ButtonProps) => {
  const getColorClass = getClassButton(color);
  const buttonClass = additionalClass ? ["font-bold py-2 px-4 rounded", getColorClass, additionalClass] : ["font-bold py-2 px-4 rounded", getColorClass];
  return (
    <button
      type="button"
      className={buttonClass.join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
