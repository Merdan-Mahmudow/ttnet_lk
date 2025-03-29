import { ImageProps } from "../../types/props";

export default function Image ({alt, src, width, height, radius}: ImageProps) {
    return (
        <img src={src} alt={alt} width={width} height={height} style={{borderRadius: radius}} onDragStartCapture={() => false}/>
    )
}