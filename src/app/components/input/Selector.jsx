import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export const Selector = ({
  placeholder,
  onSelect,
  selectOption,
  label,
  focusContent,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelect = (item) => {
    if (item.toLowerCase() !== selected.toLowerCase()) {
      setSelected(item);
      setOpen(false);
      setInputValue("");
      onSelect ? onSelect(item) : null;
    }
  };
  const inputData = ["javascript", "Python", "Golang", "Java", "C++", "Rust"];

  return (
    <div className="text-sm ">
      <p className="font-semibold flex">
        {label}{" "}
        <span className="ml-1 text-red-700 font-normal text-[10px] hidden lg:block">
          {focusContent}
        </span>
      </p>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white mt-1  border-[1.5px] border-gray-200 py-3 px-[1.5px]  flex items-cent justify-end rounded md:px-2 ${
          !selected && "text-black"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : selectOption}
        <BiChevronDown
          size={20}
          className={`cursor-pointer ${open && "rotate-180"}`}
        />
      </div>

      <ul
        className={`shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white mt-2 overflow-y-auto w-[38%]  absolute ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        {inputData?.map((item, idx) => (
          <li
            key={idx}
            className={`p-2 pl-4 pt-3 text-sm hover:bg-[#FBF6EB] hover:text-black
            ${item?.toLowerCase() === selected?.toLowerCase() && ""}
            ${item?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"}`}
            onClick={() => handleSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
