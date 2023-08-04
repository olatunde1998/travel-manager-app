interface accountIconProps {
    color: string;
    className?: string;
    width: number;
    height: number;
  }
  
  export const AccountIcon = ({
    color,
    className,
    width,
    height,
  }: accountIconProps) => {
    return (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_144_1407)">
          <path
            d="M48 8C25.92 8 8 25.92 8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8ZM48 20C54.64 20 60 25.36 60 32C60 38.64 54.64 44 48 44C41.36 44 36 38.64 36 32C36 25.36 41.36 20 48 20ZM48 76.8C38 76.8 29.16 71.68 24 63.92C24.12 55.96 40 51.6 48 51.6C55.96 51.6 71.88 55.96 72 63.92C66.84 71.68 58 76.8 48 76.8Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_144_1407">
            <rect width="96" height="96" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };
  