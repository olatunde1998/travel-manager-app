interface notificationIconProps {
    color?: string;
    className?: string;
    width?: number;
    height?: number;
    bgColor?: string;
  }

export const NotificationIcon = ({color, className, width, height, bgColor}:notificationIconProps) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox='0 0 30 32'
        fill={color}
        className={className}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14 32C15.9316 32 17.4984 30.4332 17.4984 28.5H10.5017C10.5017 30.4332 12.0685 32 14 32ZM25.7792 23.8127C24.7226 22.6774 22.7457 20.9695 22.7457 15.375C22.7457 11.1258 19.7663 7.72422 15.7489 6.88969V5.75C15.7489 4.78367 14.9658 4 14 4C13.0343 4 12.2511 4.78367 12.2511 5.75V6.88969C8.23379 7.72422 5.25441 11.1258 5.25441 15.375C5.25441 20.9695 3.27746 22.6774 2.2209 23.8127C1.89277 24.1655 1.7473 24.5871 1.75004 25C1.75605 25.8969 2.45988 26.75 3.50551 26.75H24.4946C25.5402 26.75 26.2446 25.8969 26.25 25C26.2528 24.5871 26.1073 24.1649 25.7792 23.8127Z'
          fill={bgColor}
        />
        <circle
          cx='22.75'
          cy='7.5'
          r='6'
          fill='#FF743C'
          stroke='#F7F8FC'
          strokeWidth='1.5'
        />
      </svg>
    );
  };