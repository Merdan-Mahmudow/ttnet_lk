import { IconProps } from "../../types/props";

export function BurgerIcon({ fill, width, height }: IconProps) {
    return (
        <>
            <svg width={width || "39"} height={height || "29"} viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="38.4054" height="3.91892" fill={fill || "white"} />
                <rect y="25.0811" width="38.4054" height="3.91892" fill={fill || "white"} />
                <rect y="11.7567" width="38.4054" height="3.91892" fill={fill || "white"} />
            </svg>

        </>
    )
}