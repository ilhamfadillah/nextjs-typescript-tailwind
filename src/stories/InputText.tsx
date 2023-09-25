import React from "react";

interface InputTextProps {
  type: "text" | "email" | "password";
  name: string;
  id: string;
  placeholder: string;
  isDark: boolean;
	label: string;
}

export const InputText = ({
  type,
  name,
  id,
  placeholder,
  isDark = true,
	label,
  ...props
}: InputTextProps) => {
  const setClass = isDark
    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 docus:ring-blue-500 focus:border-blue-500"
    : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600";

	const textLabel = isDark ? "text-white" : "text-gray-900";

  return (
    <div>
      <label
        htmlFor={id}
        className={["block mb-2 text-sm font-medium text-gray-900", textLabel].join(" ")}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className={[
          "border sm:text-sm rounded-lg block w-full p-2.5",
          setClass,
        ].join(" ")}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
