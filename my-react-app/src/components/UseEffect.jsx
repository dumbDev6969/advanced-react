import { useState, useEffect } from "react";

const UseEffect = () => {
    const [toggle, setToggle] = useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        document.title = toggle ? "Im here" : "Im at the top lol!"
    }, [toggle]); // this will only run whenever the toggle button is clicked

    return (
            <div>
                <h1>Using the useEffect hook</h1>
                <button onClick={clickHandler}>
                    Toggle message
                </button>
                {toggle && <h2>Im here</h2>}
            </div>
        )
}

export default UseEffect