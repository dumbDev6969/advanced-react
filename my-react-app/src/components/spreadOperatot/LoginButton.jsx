import Button from "./Button";

const LoginButton = ({ variant, children, ...buttonProps }) => {
    return (
        <Button variant="secondary" {...buttonProps} onClick={() => alert('Login')}>
            {children}
        </Button>
    )
}

export default LoginButton