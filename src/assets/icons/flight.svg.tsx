import { IconProps } from "../../types/props";

export function FlightIcon({ width, height, fill }: IconProps) {
  return (
    <>
      <svg
        width={width || "20"}
        height={height || "20"}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0216164 3.85064C-0.268152 1.15658 2.40997 -0.821837 4.77604 0.339356L18.0875 6.8702C20.6375 8.12027 20.6375 11.8786 18.0875 13.1286L4.77604 19.6606C2.40997 20.8218 -0.267037 18.8434 0.0216164 16.1494L0.556573 11.1537H9.60402C9.8996 11.1537 10.1831 11.0321 10.3921 10.8156C10.6011 10.5991 10.7185 10.3056 10.7185 9.99942C10.7185 9.69329 10.6011 9.3997 10.3921 9.18323C10.1831 8.96677 9.8996 8.84515 9.60402 8.84515H0.557687L0.0216164 3.85064Z"
          fill={fill || "white"}
        />
      </svg>
    </>
  );
}
