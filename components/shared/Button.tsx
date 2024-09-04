interface ButtonProps {
  children: React.ReactNode;
  func?: () => void;
  disabled?: boolean | undefined;
  className?: string | undefined;
}

function Button({ children, func, disabled, className }: ButtonProps) {
  return (
    <button
      onClick={func}
      className={`flex justify-center items-center w-56 h-14 bg-darkcyan hover:bg-[#66D2CF] rounded-md font-fraunces font-black text-lg text-lightcream disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-darkcyan cursor-pointer ${
        className || ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
