const Button = ({children, onClick, className, disabled}) => {
    return (          
    <button 
    className={className}
    onClick={() => onClick(true)} 
    disabled={disabled}>
            {children}
        </button>);
}
 
export default Button;