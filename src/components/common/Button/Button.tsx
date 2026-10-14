
interface ButtonProps {
    children: React.ReactNode,
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'outline-secondary' | 'outline-primary' | 'outline-danger' | 'outline-success' | 'outline-warning' | 'outline-info';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    icon?: React.ReactNode; 
    onClick?: () => void;
}
const Button = (
    {
        children,
        variant = "primary",
        size = "md",
        disabled = false,
        className ="",
        icon,
        onClick,

    }: ButtonProps
) => {
    return (
        <button className={`btn btn-${variant} btn-${size} ${className}`} disabled={disabled} onClick={onClick}>
            {icon && <span className="me-1">{icon}</span>}
            {children}
        </button>
    )
}

export default Button