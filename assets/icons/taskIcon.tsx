interface taskIconProps {
    color: string;
    className?: string;
    width: number;
    height: number;
  }
  
  export const TaskIcon = ({
      color,
    className,
    width,
    height,
  }: taskIconProps) => {
    return (
      <svg
        width={width}
        height={height}
        className={className}
        viewBox="0 0 30 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.2228 5V7H18.3339V5H23.2228ZM11.0006 5V11H6.11168V5H11.0006ZM23.2228 13V19H18.3339V13H23.2228ZM11.0006 17V19H6.11168V17H11.0006ZM25.6672 3H15.8895V9H25.6672V3ZM13.445 3H3.66724V13H13.445V3ZM25.6672 11H15.8895V21H25.6672V11ZM13.445 15H3.66724V21H13.445V15Z"
          fill={color}
        />
      </svg>
    );
  };
  