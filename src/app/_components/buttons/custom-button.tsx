import Link from "next/link";
import style from "./custom-button.module.css";
type ButtonProps = {
  variant: "light" | "dark";
  children: React.ReactNode;
  fontSize?: string;
  href?: string;
  onClick?: () => void;
};
export const CustomButton = ({
  variant,
  children,
  fontSize,
  href,
  onClick,
}: ButtonProps) => {
  return href ? (
    <Link
      href={href}
      className={`${style.btn} ${
        variant === "light" ? style.light : style.dark
      }`}
    >
      {children}
    </Link>
  ) : (
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
