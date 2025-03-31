import { useEffect, useState } from "react";

export function useWindowSize() {
    const [size, setSize] = useState({
        width: innerWidth,
        heigth: innerHeight
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: innerWidth,
                heigth: innerHeight
            })
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return size
}