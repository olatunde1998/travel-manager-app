interface TextAreaProps {
  label?: string;
  className?: string;
  name?: string;
  focusContent?: string;
  rows?: any;
  register?: any;
  inputName?: string,
}

export const TextArea = ({
  label,
  name,
  className,
  focusContent,
  rows,
  register,
  inputName
}: TextAreaProps) => {
  return (
    <>
    <div className={`${className} rounded-md cursor-pointer space-y-3`}>
      <label htmlFor={name} className="font-semibold text-sm flex">
          {label} <span className="ml-1 text-red-700 font-normal text-[10px] hidden lg:block">{focusContent}</span>
        </label>
        <textarea
          className="border rounded focus:outline-none p-3 w-full"
          name={inputName}
          rows={rows}
          {...register}
        ></textarea>
      </div>
    </>
  );
};
