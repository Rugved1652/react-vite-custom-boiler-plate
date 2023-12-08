import React from "react";


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonComponent: React.FC<ButtonProps> = ({
  name,
  type = "button",
  className = "w-full",
  onClick,
}) => {
  const baseClasses =
    "outline-0 h-[3.125rem] w-full px-3 rounded-[0.625rem] text-base bg-black";
    


  return (
    <button
      className={`${baseClasses}  ${className}`}
      type={type}
      onClick={onClick}
      style={{background: 'var(--linear-orange-1, linear-gradient(318deg, #F58124 -4.22%, #FFC266 120.23%))'
      }} 
    >
      {name}
    </button>
  );
};

export default ButtonComponent;
