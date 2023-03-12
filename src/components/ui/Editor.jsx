import React, { useState } from "react";
import EditorHeadings from "../ui/EditorHeadings";
import Forms from "../ui/Forms";

function Editor() {
  const [form, setForm] = useState(0);

  return (
    <div className="w-2/5 p-10 h-[85vh] self-start overflow-scroll relative ">
      {/* Headings */}
      <EditorHeadings setForm={setForm} />
      {/* Form */}
      <Forms form={form} />
    </div>
  );
}

export default Editor;
