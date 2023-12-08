import React, { useState, FocusEvent, MouseEvent } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import CloseEye from "../assets/iconComponent/CloseEye";
import OpenEye from "../assets/iconComponent/openEye";

// Assuming OpenEye and CloseEye are properly typed in their respective files


type TextInputProps<TFieldValues extends FieldValues> = {
  label: string;
  placeholder?: string;
  register: UseFormRegister<TFieldValues>;
  name: Path<TFieldValues>;
  type?: "text" | "password" | "email";
  onchange?:(event: React. ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

const Input = <TFieldValues extends FieldValues>({
  label,
  placeholder,
  register,
  name,
  type = "text",
  onchange,
  ...restProps
}: TextInputProps<TFieldValues>): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && !showPassword ? "password" : "text";

  return (
    <div className="relative rounded-md bg-input text-input-text w-full">
      <input
        {...register(name)}
        onChange={onchange}
        type={inputType}
        placeholder={placeholder}
        className="w-full h-[3.125rem] px-3 rounded-[0.3125rem] outline-none"
        {...restProps}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 z-50"
        >
          {showPassword ? (
            <OpenEye/>
          ) : (
            <CloseEye/>
          )}
        </button>
      )}
    </div>
  );
};

export default Input;

