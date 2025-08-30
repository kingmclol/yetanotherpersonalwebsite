import { useState } from "react";
import { HiPlus, HiXMark } from "react-icons/hi2";

function ToolListEditor({ otherTools, addTool, removeTool }) {
  const [tempTool, setTempTool] = useState("");

  function handleAddTool(tool) {
    if (!tempTool) return;
    addTool(tempTool);
    setTempTool("");
  }
  return (
    <>
      {otherTools.map((tool, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between gap-2 rounded-full border-2 border-slate-700 bg-slate-600 px-2 py-0.5 text-sm font-semibold tracking-wider text-slate-100 uppercase"
        >
          <span>{tool}</span>
          <button
            onClick={() => removeTool(idx)}
            className="flex cursor-pointer items-center rounded-full p-0.5 hover:bg-slate-500"
          >
            <HiXMark className="h-4 w-4" />
          </button>
        </div>
      ))}
      <div className="flex gap-2">
        <input
          className="flex w-32 items-center justify-between gap-1 rounded-full border-2 border-slate-700 bg-slate-600 px-2 py-0.5 text-sm font-semibold tracking-wider text-slate-100 uppercase"
          placeholder="Add tag..."
          value={tempTool}
          onKeyDown={(e) => e.code==="Enter" && handleAddTool(tempTool)}
          onChange={(e) => setTempTool(e.target.value.toLowerCase())}
        />
        <button
          type="button"
          onClick={() => handleAddTool(tempTool)}
          className="cursor-pointer rounded-full border-2 border-slate-700 bg-sky-700 p-1 text-white hover:bg-sky-600"
        >
          <HiPlus className="h-4 w-4" />
        </button>
      </div>
    </>
  );
}

export default ToolListEditor;
