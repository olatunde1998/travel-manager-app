interface ButtonProps {
    btnText?: string;
    className?: string;
    handleBtnClick?: () => void;
    btnIcon?: any;
  }
  
  export const Button = ({
    btnText,
    className,
    handleBtnClick,
  }: ButtonProps) => {
    return (
      <>
        <div
          className={`${className} p-3 w-[200px] rounded-md text-center cursor-pointer`}
        >
          <button
            onClick={handleBtnClick}
            className="flex items-center justify-center"
          >
            {btnText}
          </button>
        </div>
      </>
    );
  };
  
  export const IconButton = ({
    btnText,
    className,
    handleBtnClick,
    btnIcon,
  }: ButtonProps) => {
    return (
      <>
        <div
          className={`${className} p-3 w-[200px] rounded-md text-center cursor-pointer`}
        >
          <button
            onClick={handleBtnClick}
            className="flex items-center justify-center"
          >
            <span className="mr-4 ml-2">{btnIcon}</span>
            {btnText}
          </button>
        </div>
      </>
    );
  };
  