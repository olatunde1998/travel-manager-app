interface ClientIconProps {
    color: string;
    className?: string;
    width: number;
    height: number;
  }
  
  export const ClientIcon = ({
    //   color,
    className,
    width,
    height,
  }: ClientIconProps) => {
    return (
        <svg width={width} height={height} className={className} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_144_1410)">
        <path d="M48 23.6C52.64 23.6 56.4 27.36 56.4 32C56.4 36.64 52.64 40.4 48 40.4C43.36 40.4 39.6 36.64 39.6 32C39.6 27.36 43.36 23.6 48 23.6ZM48 59.6C59.88 59.6 72.4 65.44 72.4 68V72.4H23.6V68C23.6 65.44 36.12 59.6 48 59.6ZM48 16C39.16 16 32 23.16 32 32C32 40.84 39.16 48 48 48C56.84 48 64 40.84 64 32C64 23.16 56.84 16 48 16ZM48 52C37.32 52 16 57.36 16 68V80H80V68C80 57.36 58.68 52 48 52Z" fill="#434343"/>
        </g>
        <defs>
        <clipPath id="clip0_144_1410">
        <rect width="96" height="96" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
    );
  };
  