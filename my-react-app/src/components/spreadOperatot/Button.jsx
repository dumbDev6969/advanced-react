const Button = ({ variant = "primary", children, ...buttonProps }) => {
    const bgColor = variant === "primary" ? "blue" : "red";

    return (
        <button 
            style={{ backgroundColor: bgColor }} 
            // Dump all other props (like onClick) safely at the end
            {...buttonProps}
        >
            {children}
        </button>
    );
};

export default Button