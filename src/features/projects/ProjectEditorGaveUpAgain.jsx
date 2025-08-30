import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiOutlineUsers } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Divider from "../../ui/Divider";
import Modal from "../../ui/Modal";
import ToolTag from "../../ui/ToolTag";
import { formatDateMonthYear } from "../../utils/helpers";
import AuthStatusTag from "../auth/AuthStatusTag";
import LoginForm from "../auth/LoginForm";
import { useUser } from "../auth/useUser";
import ProjectImage from "./ProjectImage";
import FormRow from "../../ui/FormRow";
import { useState } from "react";
import Input from "../../ui/Input";
function ProjectEditor({ project }) {
  const {
    start_date: startDate,
    end_date: endDate,
    title,
    slug,
    image: imagePath,
    team_size: teamSize,
    external_url: projectUrl,
    description,
    tool_main: mainTool,
  } = project;
  const [otherTools, setOtherTools] = useState(project.tool_others);
  const [tempOtherTool, setTempOtherTool] = useState("");
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: project,
  });
  const errors = formState.errors;
  console.log(formState);
  function onSubmit(formData) {
    const updatedProject = Object.fromEntries(formData);
    console.log(updatedProject);
    toast("a submit was triggered");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal>
        <Modal.Open
          target="image"
          renderButton={(openFunc) => (
            <div
              whileHover="whileHover"
              whileTap="whileTap"
              className="mx-auto mb-6 aspect-[16/9] max-w-xl rounded-lg border-4 border-slate-600 hover:border-slate-400"
              onClick={openFunc}
            >
              <ProjectImage imagePath={imagePath} alt={title} />
            </div>
          )}
        />
        <Modal.Window
          name="image"
          renderChildren={(closeFunc) => (
            <div className="flex flex-col items-center justify-center gap-4">
              <ProjectImage imagePath={imagePath} alt={title} />
              <Button type="button" onClick={closeFunc}>
                Close
              </Button>
            </div>
          )}
        />
      </Modal>
      <div>
        <FormRow label="Title" error={errors?.title?.message}>
          <Input
            type="text"
            id="title"
            {...register("title", { required: "Project title required" })}
          />
        </FormRow>
        <FormRow
          label="External Project Link"
          error={errors?.external_url?.message}
        >
          <Input type="text" id="external_url" {...register("external_url")} />
        </FormRow>
        <FormRow label="Team Size" error={errors?.team_size?.message}>
          <Input
            type="number"
            id="team_size"
            className="[appearance:textfield] rounded-xl bg-slate-600 px-2 py-1 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            {...register("team_size", {
              required: "Team size required",
              valueAsNumber: "Uh you need a number",
              validate: (value) =>
                Number.isInteger(value) || "an INTEGER please",
              min: {
                value: 1,
                message: "ffs bro",
              },
            })}
          />
        </FormRow>
        <div>
          <p> dates</p>
          {formatDateMonthYear(startDate)} &mdash;{" "}
          {endDate ? formatDateMonthYear(endDate) : "now"}
        </div>
        <FormRow label="Main Tool" error={errors?.tool_main?.message}>
          <Input
            type="text"
            id="tool_main"
            {...register("tool_main", { required: "please add a main tool" })}
          />
        </FormRow>
        <div>
          {otherTools.map((tool, idx) => (
            <div key={idx} className="flex justify-between">
              {tool}{" "}
              <button
                type="button"
                onClick={() =>
                  setOtherTools((prev) => prev.filter((_, i) => i !== idx))
                }
              >
                Remove
              </button>
            </div>
          ))}
          <div>
            <label
              htmlFor="add_other_tool"
              type="text"
              placeholder="Add other tool..."
              value={tempOtherTool}
              onChange={(e) => setOtherTools(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                setOtherTools((prev) => [...prev, tempOtherTool]);
                setTempOtherTool("");
              }}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-xl flex-wrap items-center justify-between gap-8">
        <div className="flex items-center gap-2 font-semibold">
          <HiOutlineUsers className="h-6 w-6" />{" "}
        </div>
        <div className="text-lg font-semibold tracking-wide">
          {/* This is annoying */}
        </div>
      </div>
      <Divider noAnimate spacing="small" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        <ToolTag tool={mainTool} isMain />
        {otherTools.map((tool) => (
          <ToolTag key={tool} tool={tool} />
        ))}
      </div>
      <Divider noAnimate spacing="small" />
      <textarea
        id="description"
        className="mx-auto field-sizing-content w-full max-w-2xl rounded-xl bg-slate-700 px-4 py-2 whitespace-pre-wrap"
        {...register("desription")}
      >
        {description}
      </textarea>
      <Divider noAnimate />
      <div animateOnce className="flex flex-col items-center justify-center">
        <div>
          You are currently <AuthStatusTag />
        </div>
        <div className="my-4 flex gap-4">
          <Button type="button" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Modal>
            <Modal.Open
              target="login"
              renderButton={(openFunc) => (
                <Button
                  onClick={
                    isAuthenticated ? () => console.log("SAVE") : openFunc
                  }
                  className="rounded-full bg-red-700 px-4 py-2 text-white"
                >
                  Save
                </Button>
              )}
            />

            <Modal.Window
              titleText="Your free trial has expired."
              name="login"
              renderChildren={(closeFunc) => (
                <LoginForm onSuccess={closeFunc} />
              )}
            />
          </Modal>
        </div>
      </div>
    </form>
  );
}

// export default ProjectEditor;
