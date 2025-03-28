import { IconProps } from "../../types/props";

export function WarnIcon({ fill, width, height }: IconProps) {
    return (
        <>
            <svg width={width || "7"} height={height || "26"} viewBox="0 0 7 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.411743" y="0.117676" width="6.53016" height="16.3254" rx="2" fill={fill || "none"} />
                <circle cx="3.4137" cy="22.1205" r="3.26508" fill={fill || "none"} />
            </svg>

        </>
    )
}