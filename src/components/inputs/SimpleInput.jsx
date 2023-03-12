import React, { useRef } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

function SimpleInput({ type, name, placeholder, value, onValueChange }) {
  const inputRef = useRef();

  const update = (e) => {
    let clone = { ...value };
    clone[name] = e.target.value;
    onValueChange(clone);
  };

  const handleClear = (e) => {
    inputRef.current.value = "";
    inputRef.current.focus();
    update(e);
  };

  return (
    <div className="flex flex-row items-center input-with-clear">
      <input
        ref={inputRef}
        className="text-black dark:text-white bg-transparent border-b-2 border-b-black-400 dark:border-b-neutral-500  invalid:border-b-red-500 dark:invalid:border-b-red-500 outline-none focus:border-b-2 dark:focus:border-b-neutral-50 focus:border-b-black duration-300 w-4/5 my-2 pr-6"
        type={type}
        placeholder={placeholder}
        value={value[name]}
        onChange={update}
        pattern={type === "tel" ? "[0-9]{10}" : undefined}
      />
      <XCircleIcon
        className="h-4 2-4 relative -left-4 cursor-pointer opacity-0"
        onClick={handleClear}
      />
    </div>
  );
}

export default SimpleInput;
