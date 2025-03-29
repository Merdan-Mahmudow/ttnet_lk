import { ReactNode } from "@tanstack/react-router"

interface CircleProps {
    fill: string
    padding?: string
    radius?: string
    children?: ReactNode
}

export function Circle ({fill, padding, radius, children}: CircleProps) {
    return (
        <div className="circle"
        style={{
            backgroundColor: fill,
            padding: padding || "5px 5px",
            borderRadius: radius || "200px",
            display: "flex",
            width: "fit-content",
            height: "fit-content",
            color: "white"
        }}>
            {children}
        </div>
    )
}