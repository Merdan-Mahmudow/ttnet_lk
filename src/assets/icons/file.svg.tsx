import { IconProps } from "../../types/props";

export function FileIcon({ width, height, fill }: IconProps) {
  return (
    <>
      <svg
        width={width || "18"}
        height={height || "21"}
        viewBox="0 0 18 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.125 7.35V1.575L16.3125 7.35M2.25 0C1.00125 0 0 0.9345 0 2.1V18.9C0 19.457 0.237053 19.9911 0.65901 20.3849C1.08097 20.7787 1.65326 21 2.25 21H15.75C16.3467 21 16.919 20.7787 17.341 20.3849C17.7629 19.9911 18 19.457 18 18.9V6.3L11.25 0H2.25Z"
          fill={fill || "white"}
        />
      </svg>
    </>
  );
}
