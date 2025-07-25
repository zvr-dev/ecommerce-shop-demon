import './customButton.css'
type ButtonProps = {
    variant: "light" | "dark";
    children: React.ReactNode;
    onClick?: () => void;
}
export const CustomButton = ({variant, children, onClick}: ButtonProps) => {
    return <button className={`btn ${variant}`} onClick={onClick}>
        {children}
    </button>
}