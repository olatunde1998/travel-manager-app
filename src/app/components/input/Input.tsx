interface InputProps {
  label?: string;
  className?: string;
  name?: string;
  type?: string;
  focusContent?: string;
}

export const Input = ({
  label,
  name,
  type,
  className,
  focusContent,
}: InputProps) => {
  return (
    <>
      <div className={`${className} rounded-md cursor-pointer`}>
        <label htmlFor={name} className="mb-1 font-semibold text-sm flex">
          {label} <span className="ml-1 text-red-700 font-normal text-[10px] hidden lg:block">{focusContent}</span>
        </label>
        <input
          name={name}
          type={type}
          className={`border rounded focus:outline-none p-3 w-full`}
        />
      </div>
    </>
  );
};
