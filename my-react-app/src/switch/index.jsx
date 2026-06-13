
import { useTheme } from "../provider/ThemeProvider";

const Switch = () => {
    const { theme, toggle } = useTheme();

    return (
    <label className="switch">
        <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggle}
        />
        <span className="slider round" />
    </label>
    );
}

export default Switch