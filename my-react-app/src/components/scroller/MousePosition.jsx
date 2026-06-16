import { useState, useEffect } from "react";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMousePositionChange = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", handleMousePositionChange)

        return () => {
            window.removeEventListener("mousemove", handleMousePositionChange);
        };

    }, []);
    return mousePosition
}

export default useMousePosition