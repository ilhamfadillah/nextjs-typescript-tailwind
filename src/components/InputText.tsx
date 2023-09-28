import React, { ForwardRefRenderFunction, forwardRef } from "react";

interface InputTextProps {
  type: "text" | "email" | "password";
  id: string;
  placeholder: string;
  error?: boolean;
  label: string;
}

const InputText: ForwardRefRenderFunction<
  HTMLInputElement,
  InputTextProps & Record<string, unknown>
> = ({
  type,
  id,
  placeholder,
  error = false,
  label,
  ...restProps
}, ref) => {
  const setClass =
    "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500";
  const errorBorder = error ? "border-rose-500" : "";
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={[
          "border sm:text-sm rounded-lg block w-full p-2.5",
          setClass,
          errorBorder,
        ].join(" ")}
        placeholder={placeholder}
        ref={ref}
        {...restProps}
      />
    </div>
  );
};

export default forwardRef(InputText);