import React, { useState } from "react";
import EditorHeadings from "../ui/EditorHeadings";
import Forms from "../ui/Forms";
import Colors from "./Colors";

function Editor() {
  const [form, setForm] = useState(0);

  return (
    <div className="w-2/5 p-10 h-[85vh] self-start overflow-scroll relative ">
      {/* Headings */}
      <EditorHeadings setForm={setForm} />
      {/* Form */}
      <Forms form={form} />
      {/* Colors */}
      <Colors/>
    </div>
  );
}

export default Editor;
