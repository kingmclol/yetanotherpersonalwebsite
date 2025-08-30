import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiOutlineUsers } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Divider from "../../ui/Divider";
import Modal from "../../ui/Modal";
import ToolListEditing from "../../ui/ToolListEditing";
import { formatDateMonthYear, getMonthYear } from "../../utils/helpers";
import AuthStatusTag from "../auth/AuthStatusTag";
import LoginForm from "../auth/LoginForm";
import { useUser } from "../auth/useUser";
import ProjectImage from "./ProjectImage";
// This shit is the worst thing I've ever made in this website what the fuck
// I have no fucking clue how to manage everything since things are not standard forms + layout hell
// Why the hell did i decide to make the form accessible to non auth users
// There's nothing to show off man this is garbage
// i'll just do all controlled component even though its messy asf otherwise i get nowhere

// Ahhahahha select options are not stylable i gotta use another library fuck this im going to make it so only i can use it
// then screw everything i know how to format my stuff anyways
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => currentYear - i); // last 30 years
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function ProjectEditor({ project }) {
  const startDateData = getMonthYear(project.start_date);
  const endDateData = getMonthYear(project.end_date || "2025-08-01");
  const [isOngoing, setIsOngoing] = useState(project.end_date === null);
  console.log(getMonthYear(project.start_date));
  console.log(formatDateMonthYear(project.start_date));
  const formFields = {
    title: project.title,
    external_url: project.external_url,
    team_size: project.team_size,
    start_year: startDateData.year,
    start_month: startDateData.month,
    end_month: endDateData.month,
    end_year: endDateData.year,
    image: project.image,
    tool_main: project.tool_main,
    tool_others: project.tool_others,
    description: project.description,
    slug: project.slug,
  };
  const startDate = project.start_date;
  const endDate = project.end_Date;

  const [otherTools, setOtherTools] = useState(project.tool_others);
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();
  const { register, handleSubmit, getValues, formState } = useForm({
    defaultValues: formFields,
  });
  const errors = formState.errors;
  console.log(formState);
  const imagePath = project.image;
  const title = project.title;
  function onSubmit(formData) {
    console.log(formData);
    const cleanedMainTool = formData.tool_main.toLowerCase();

    toast("a submit was triggered");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Eat the enter key triggering topmost button */}
      <button disabled className="hidden" aria-hidden="true"></button>
      <Modal>
        <Modal.Open
          target="image"
          renderButton={(openFunc) => (
            <motion.div
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
              <Button type="button" onClick={closeFunc}>
                Close
              </Button>
            </div>
          )}
        />
      </Modal>
      <div>
        <h2 className="flex justify-center text-2xl font-bold tracking-wider">
          <input
            type="text"
            id="title"
            placeholder="Project Title"
            className="rounded-full bg-slate-600 text-center"
            {...register("title", { required: "Project title required" })}
          />
        </h2>
        <input
          type="text"
          id="external_url"
          placeholder="external url"
          className="my-4 w-full text-center"
          {...register("external_url")}
        />
      </div>
      <div className="mx-auto flex max-w-xl flex-wrap items-center justify-between gap-8">
        <div className="flex items-center gap-2 font-semibold">
          <HiOutlineUsers className="h-6 w-6" />{" "}
          <input
            type="number"
            id="team_size"
            className="w-16 [appearance:textfield] rounded-xl bg-slate-700 px-2 py-1 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
        <div>
          <label>
            Ongoing?
            <input
              type="checkbox"
              checked={isOngoing}
              onChange={(e) => setIsOngoing(e.target.checked)}
            />
          </label>
        </div>
        <div className="flex gap-2 text-lg font-semibold tracking-wide">
          <select {...register("start_month")}>
            {months.map((y, i) => (
              <option key={y} value={i + 1}>
                {y}
              </option>
            ))}
          </select>
          <select {...register("start_year")}>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <p>&mdash;</p>
          {isOngoing ? (
            <p>now</p>
          ) : (
            <>
              <select {...register("end_month")}>
                {months.map((y, i) => (
                  <option key={y} value={i + 1} className="bg-slate-700">
                    {y}
                  </option>
                ))}
              </select>
              <select {...register("end_year")}>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      </div>
      <Divider noAnimate spacing="small" />
      <div className="flex max-w-2xl flex-wrap items-center justify-center gap-2">
        <input
          id="tool_main"
          {...register("tool_main", { required: "a main tool is required" })}
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
          className="field-sizing-content w-full max-w-2xl rounded-xl bg-slate-700 px-4 py-2 whitespace-pre-wrap"
          {...register("description")}
        />
      </div>
      <Divider noAnimate />
      <div className="flex flex-col items-center justify-center">
        <div>
          You are currently <AuthStatusTag />
        </div>
        <div className="my-4 flex gap-4">
          <button type="submit">submit</button>
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

export default ProjectEditor;
