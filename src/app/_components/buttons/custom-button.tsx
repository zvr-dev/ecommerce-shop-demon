import style from "./custom-button.module.css";
type ButtonProps = {
  variant: "light" | "dark";
  children: React.ReactNode;
  fontSize?: string;
  onClick?: () => void;
};
export const CustomButton = ({
  variant,
  children,
  onClick,
  fontSize,
}: ButtonProps) => {
  return (
    <button
      className={`${style.btn} ${
        variant === "light" ? style.light : style.dark
      }`}
      style={{ fontSize: fontSize }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
