import { format, isBefore } from "date-fns";
import { motion } from "motion/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  HiArrowTopRightOnSquare,
  HiOutlineFingerPrint,
  HiOutlineUsers,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Divider from "../../ui/Divider";
import Modal from "../../ui/Modal";
import ToolListEditing from "../../ui/ToolListEditor";
import AuthStatusTag from "../auth/AuthStatusTag";
import LoginForm from "../auth/LoginForm";
import { useUser } from "../auth/useUser";
import ProjectImage from "./ProjectImage";
import { useUpdateProject } from "./useUpdateProject";
import { buttonVariants } from "../../utils/animationVariants";
// This shit is the worst thing I've ever made in this website what the fuck
// I have no fucking clue how to manage everything since things are not standard forms + layout hell
// Why the hell did i decide to make the form accessible to non auth users
// There's nothing to show off man this is garbage
// i'll just do all controlled component even though its messy asf otherwise i get nowhere

// Ahhahahha select options are not stylable i gotta use another library fuck this im going to make it so only i can use it
// then screw everything i know how to format my stuff anyways

// Well gpt is gonna need to carry me with this i guess because why do timezones exist

// by far the worst file
// TODO: add image updating logic rip me im gonna die

// Anyways, for unauth users: no access to submit, use form normally until it is valid. When it is valid, open login form
// For auth users, save button works as normal submit

function ProjectEditor({ project }) {
  const id = project.id;
  const formFields = {
    title: project?.title || "",
    external_url: project?.external_url || "",
    team_size: project?.team_size || null,
    start_date: project?.start_date ? new Date(project.start_date) : new Date(),
    end_date: project?.end_date ? new Date(project.end_date) : null,
    image: project?.image || null,
    tool_main: project?.tool_main || "",
    description: project?.description || "",
    slug: project?.slug || "",
  };

  const [otherTools, setOtherTools] = useState(project.tool_others);
  const { isAuthenticated } = useUser();
  const { updateProject, isUpdating } = useUpdateProject();
  const navigate = useNavigate();
  const { register, handleSubmit, getValues, control, trigger, formState } =
    useForm({
      defaultValues: formFields,
    });
  const imagePath = project.image;
  const title = project.title;

  function onSubmit(formData) {
    if (!isAuthenticated) return; // I don't know how much guards i need to add to be safe lol
    const tool_main = formData.tool_main.toLowerCase();
    const start_date = formData.start_date.toISOString();
    const end_date = formData?.end_date
      ? formData.end_date.toISOString()
      : null;

    const updatedProject = {
      ...formData,
      tool_main,
      start_date,
      end_date,
      tool_others: otherTools,
    };
    updateProject({ id, updatedProject });
  }
  function onError(errors) {
    Object.values(errors).forEach((err) => {
      if (err?.message) toast.error(err.message);
    });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="min-w-xl">
      {/* Eat the enter key triggering topmost button */}
      <button disabled className="hidden" aria-hidden="true"></button>
      <Modal>
        <Modal.Open
          target="image"
          renderButton={(openFunc) => (
            <motion.div
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              className="mx-auto mb-6 aspect-[16/9] max-w-xl rounded-lg border-4 border-slate-600 hover:border-slate-400"
              onClick={openFunc}
            >
              <ProjectImage imagePath={imagePath} alt={title} />
            </motion.div>
          )}
        />
        <Modal.Window
          name="image"
          renderChildren={(closeFunc) => (
            <div className="flex flex-col items-center justify-center gap-4">
              <ProjectImage imagePath={imagePath} alt={title} />
              <Button onClick={closeFunc}>Close</Button>
            </div>
          )}
        />
      </Modal>
      <div className="mb-4 flex flex-col gap-2">
        <h2 className="mb-2 flex justify-center text-2xl font-bold tracking-wider">
          <input
            type="text"
            id="title"
            placeholder="Project Title"
            className="w-full max-w-96 rounded-full bg-slate-600 text-center"
            {...register("title", { required: "Project title required" })}
          />
        </h2>
        <div className="flex items-center gap-4">
          <HiOutlineFingerPrint className="h-6 w-6" />
          <input
            type="text"
            id="slug"
            className="w-full rounded-full bg-slate-700 px-4 py-1"
            {...register("slug", {
              required: "A slug is required.",
              validate: (value) =>
                value !== "new" || "The slug 'new' is reserved.",
              pattern: {
                value: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                message:
                  "Slug must be lowercase letters, numbers, or hyphens, and cannot start/end with a hyphen.",
              },
            })}
            placeholder="slug (identifier)"
          />
        </div>
        <div className="flex items-center gap-4">
          <HiArrowTopRightOnSquare className="h-6 w-6" />
          <input
            type="text"
            id="external_url"
            placeholder="external url"
            className="w-full rounded-full bg-slate-700 px-4 py-1"
            {...register("external_url")}
          />
        </div>
      </div>
      <div className="mx-auto flex flex-wrap items-center justify-between gap-8">
        <div className="flex items-center gap-4 font-semibold">
          <HiOutlineUsers className="h-6 w-6" />{" "}
          <input
            type="number"
            id="team_size"
            className="w-16 [appearance:textfield] rounded-xl bg-slate-700 px-2 py-1 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="Team"
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
        </div>
        <div className="flex gap-2 font-semibold tracking-wide">
          <Controller
            control={control}
            rules={{ required: "A start date is required" }}
            name="start_date"
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value ? new Date(field.value) : null}
                onChange={(date) => field.onChange(date)}
                enableTabLoop={false}
                dateFormat="MMM yyyy"
                showMonthYearPicker
                className="max-w-32 rounded-full bg-slate-700 px-2 py-1 text-center"
                placeholderText="Start date"
              />
            )}
          />
          <p className="flex items-center font-bold">&mdash;</p>
          <Controller
            control={control}
            name="end_date"
            rules={{
              validate: (value) => {
                return (
                  !value ||
                  isBefore(getValues().start_date, value) ||
                  "End date needs to be after start date"
                );
              },
            }}
            render={({ field }) => (
              <DatePicker
                {...field}
                selected={field.value ? new Date(field.value) : null}
                onChange={(date) => field.onChange(date)}
                enableTabLoop={false}
                dateFormat="MMM yyyy"
                showMonthYearPicker
                className="max-w-32 rounded-full bg-slate-700 px-2 py-1 text-center"
                placeholderText="now"
              />
            )}
          />
        </div>
      </div>
      <Divider noAnimate spacing="small" />
      <div className="flex max-w-2xl flex-wrap items-center justify-center gap-2">
        <input
          id="tool_main"
          placeholder="Main tool"
          {...register("tool_main", { required: "A main tool is required" })}
          className="rounded-full border-2 border-purple-900 bg-purple-600 px-2 py-0.5 text-sm font-semibold tracking-wider text-white uppercase"
        />
        <ToolListEditing
          mainTool={getValues().mainTool}
          otherTools={otherTools}
          addTool={(tool) =>
            setOtherTools((prev) => [...prev, tool.toLowerCase()])
          }
          removeTool={(index) => {
            setOtherTools((prev) => prev.filter((_, idx) => idx !== index));
          }}
        />
      </div>
      <Divider noAnimate spacing="small" />
      <div className="flex items-center justify-center">
        <textarea
          id="description"
          placeholder="Project description"
          className="field-sizing-content min-h-96 w-full max-w-2xl rounded-xl bg-slate-700 px-4 py-2 whitespace-pre-wrap"
          {...register("description")}
        />
      </div>
      <Divider noAnimate />
      <div className="flex flex-col items-center justify-center">
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
                  type={isAuthenticated ? "submit" : "button"}
                  onClick={
                    isAuthenticated
                      ? () => {} // no extra function for auth users
                      : async () => {
                          // Force check for validity, and show errors/login form for unauth users
                          const valid = await trigger();
                          if (valid) openFunc();
                          else onError(formState.errors);
                        }
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

export default ProjectEditor;
