interface ButtonProps {
  btnText: string;
  className: string;
  onClick?: () => void;
}

export const Button = ({ btnText, className, onClick }: ButtonProps) => {
  return (
    <>
      <div
        className={`${className} p-3 w-[200px] text-white rounded-md text-center cursor-pointer`}
      >
        <button onClick={onClick}>{btnText}</button>
      </div>
    </>
  );
};
