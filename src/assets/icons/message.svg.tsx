import { IconProps } from "../../types/props";


export function MessageIcon({ fill, width, height, rectFill }: IconProps) {
    return (
        <>
            <svg width={width || "28"} height={height || "26"} viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M21.9056 2.79529C21.9056 1.69072 21.0102 0.795288 19.9056 0.795288H2.53015C1.42558 0.795288 0.530151 1.69072 0.530151 2.79529V14.2276C0.530151 15.3322 1.42558 16.2276 2.53015 16.2276H18.343C18.3431 16.2276 18.3431 16.2276 18.3431 16.2276V16.2276C18.3431 16.2277 18.3431 16.2277 18.3431 16.2277L21.1648 16.2277C22.7539 16.2277 23.5503 14.3069 22.4274 13.1825V13.1825C22.0933 12.848 21.9056 12.3945 21.9056 11.9217V2.79529Z" fill={fill || "none"} />
                <rect x="4.64545" y="5.14868" width="13.3747" height="2.05764" fill={rectFill || "none"} />
                <rect x="4.64545" y="10.2927" width="13.3747" height="2.05764" fill={rectFill || "none"} />
            </svg>

        </>
    )
}