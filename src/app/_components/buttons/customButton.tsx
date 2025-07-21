import './customButton.css'
type ButtonProps = {
    variant: "light" | "dark";
    children: React.ReactNode;
}
export const CustomButton = ({variant, children}: ButtonProps) => {
    return <button className={`btn ${variant}`}>
        {children}
    </button>
}