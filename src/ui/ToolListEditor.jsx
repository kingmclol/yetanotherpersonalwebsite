import { useState } from "react";
import toast from "react-hot-toast";
import { HiPlus, HiXMark } from "react-icons/hi2";

function ToolListEditor({
  otherTools,
  addTool,
  removeTool,
  disabled,
  mainTool,
}) {
  const [tempTool, setTempTool] = useState("");

  function handleAddTool(tool) {
    if (!tool) return;
    // Verify that tool is unique
    if (mainTool === tempTool) {
      toast.error("Already exists as main tool");
    } else if (otherTools.includes(tool)) {
      toast.error("Tool already exists");
    } else {
      // Unique tool so can add
      addTool(tempTool);
    }
    setTempTool("");
  }
  return (
    <>
      {otherTools.map((tool, idx) => (
        <li
          key={idx}
          className="flex items-center justify-between gap-2 rounded-full border-2 border-slate-700 bg-slate-600 px-2 py-0.5 text-sm font-semibold tracking-wider text-slate-100 uppercase"
        >
          <span>{tool}</span>
          <button
            onClick={() => removeTool(idx)}
            className="flex cursor-pointer items-center rounded-full p-0.5 hover:bg-slate-500"
            disabled={disabled}
          >
            <HiXMark className="h-4 w-4 text-red-700" strokeWidth={2} />
          </button>
        </li>
      ))}
      <li className="flex gap-2">
        <input
          className="flex w-32 items-center justify-between gap-1 rounded-full border-2 border-slate-700 bg-slate-600 px-2 py-0.5 text-sm font-semibold tracking-wider text-slate-100 uppercase"
          placeholder="Add tag..."
          value={tempTool}
          onKeyDown={(e) => e.code === "Enter" && handleAddTool(tempTool)}
          onChange={(e) => setTempTool(e.target.value.toLowerCase())}
          disabled={disabled}
        />
        <button
          type="button"
          onClick={() => handleAddTool(tempTool)}
          className="cursor-pointer rounded-full border-2 border-slate-700 bg-sky-700 p-1 text-white hover:bg-sky-600"
          disabled={disabled}
        >
          <HiPlus className="h-4 w-4" strokeWidth={2} />
        </button>
      </li>
    </>
  );
}

export default ToolListEditor;
