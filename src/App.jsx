import { useEffect, useState } from "react";

import Navbar from "./components/ui/Navbar";
import Editor from "./components/ui/Editor";
import Preview from "./components/ui/Preview";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem("dark-mode"));
    if (isDark) {
      setDark(isDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(dark));
  }, [dark]);

  let classes =
    "relative duration-300 h-screen w-screen flex flex-col overflow-x-hidden ";

  return (
    <div className={dark ? classes + "dark bg-zinc-900 " : classes + "bg-gray-50 "}>
      <Navbar theme={dark} setTheme={setDark} />
      <div className="px-20 mt-20 w-screen relative flex flex-row items-center">
        <Editor />

        <div className="h-[90%] w-[1px] bg-black dark:bg-white" />
        <Preview />
      </div>
    </div>
  );
}

export default App;
