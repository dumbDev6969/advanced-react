import { useEffect, useRef } from "react"

const usePrevious = (val) => {
    const ref = useRef(null);

    useEffect(() => {
        ref.current = val
    }, [val]);

    return ref.current;
}

export default usePrevious