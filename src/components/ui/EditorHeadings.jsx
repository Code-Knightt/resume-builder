import React, { useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function EditorHeadings({ setForm }) {
  const headingsRef = useRef();
  const [headingIndex, setHeadingIndex] = useState(0);

  const headings = [
    "Personal Details",
    "Academics",
    "Work Experience",
    "Skills",
    "Projects",
    "Courses and Certifications",
  ];

  const scrollHeading = (index) => {
    headingsRef.current.children[index].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "center",
    });
  };

  const change = (index) => {
    headingsRef.current.children[headingIndex].className = "";
    headingsRef.current.children[index].className = "active-heading";
    setForm(index);
    scrollHeading(index);
    setHeadingIndex(index);
  };

  useEffect(() => {
    headingsRef.current.children[headingIndex].className = "active-heading";
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div
        ref={headingsRef}
        className="w-full overflow-scroll flex flex-row h-fit no-scrollbar snap-x snap-mandatory child:snap-start child:text-2xl child:font-extrabold child:uppercase child:flex-shrink-0 child:mr-20 child:h-fit child:select-none child:duration-300 child:cursor-pointer child:ease-in-out text-black dark:text-white"
      >
        {headings.map((heading, index) => {
          return (
            <h3 key={index} onClick={() => change(index)}>
              {heading}
            </h3>
          );
        })}
        <div className="w-full h-2" />
      </div>

      <div className="text-2xl -translate-x-2 mt-2">
        <ChevronLeftIcon
          className="h-8 w-8 inline cursor-pointer stroke-black dark:stroke-white select-none"
          onClick={() => {
            if (headingIndex !== 0) {
              change(headingIndex - 1);
            }
          }}
        />{" "}
        <ChevronRightIcon
          className="h-8 w-8 inline cursor-pointer stroke-black dark:stroke-white select-none"
          onClick={() => {
            if (headingIndex !== headings.length - 1) {
              change(headingIndex + 1);
            }
          }}
        />
      </div>
    </div>
  );
}

export default EditorHeadings;
