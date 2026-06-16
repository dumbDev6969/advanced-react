import Button from "./Button";

const LoginButton = ({ type, children, ...buttonProps }) => {
    return (
        <Button type="primary" {...buttonProps} onClick={() => alert('Login')}>
            {children}
        </Button>
    )
}

export default LoginButton