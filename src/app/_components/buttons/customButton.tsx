import './customButton.css'
type ButtonProps = {
    variant: "light" | "dark";
    children: React.ReactNode;
    fontSize?: string;
    onClick?: () => void;
}
export const CustomButton = ({variant, children, onClick, fontSize}: ButtonProps) => {
    return <button className={`btn ${variant}`} 
        style={{fontSize:fontSize}} 
        onClick={onClick}>
        {children}
    </button>
}