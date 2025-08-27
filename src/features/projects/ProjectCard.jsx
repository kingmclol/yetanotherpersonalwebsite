import { format, parse } from "date-fns";
import { motion } from "motion/react";
import { HiMiniArrowTopRightOnSquare, HiOutlineUsers } from "react-icons/hi2";
import Divider from "../../ui/Divider";
import Modal from "../../ui/Modal";
import { fadeInFromBottom } from "../../utils/animationVariants";
import { formatDateMonthYear, getImageUrl } from "../../utils/helpers";

// TODO: Definitely move the modal window component to something else, where I allow for editing + display tools used
function ProjectCard({ project }) {
  const {
    id,
    start_date: startDate,
    end_date: endDate,
    title,
    image: imagePath,
    team_size: teamSize,
    slug,
    external_url: projectUrl,
    description,
    tagline,
    tool_main: mainTool,
    tool_others: otherTools,
  } = project;
  return (
    <>
      <Modal.Open
        target={id}
        renderButton={(openFunc) => (
          <motion.div
            variants={fadeInFromBottom}
            onClick={openFunc}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="flex cursor-pointer flex-col rounded-xl border-4 border-slate-600 bg-slate-700 transition-colors hover:border-slate-400"
          >
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-800">
              {imagePath ? (
                <img
                  className="h-full w-full object-cover"
                  src={getImageUrl(imagePath)}
                  alt={title}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center text-3xl font-bold tracking-wider uppercase">
                  <img
                    src="/sucrose_doubt.webp"
                    alt="confused image"
                    className="h-28 w-28"
                  />
                  No image set
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col justify-between px-4 py-4">
              <div>
                <h2 className="mb-2 text-center text-2xl font-semibold tracking-wide text-slate-200">
                  {title}
                </h2>
                <p className="text-md text-center text-slate-400 italic">
                  "{tagline}"
                </p>
                <Divider noAnimate spacing="tiny" />
                <p className="line-clamp-3 px-4">{description}</p>
              </div>
            </div>
            <div className="flex justify-between px-4 py-2 text-gray-400">
              <p className="flex items-center gap-2">
                <HiOutlineUsers /> {teamSize === 1 ? "solo" : teamSize}
              </p>
              <div>
                {formatDateMonthYear(startDate)} &mdash;{" "}
                {endDate ? formatDateMonthYear(endDate) : "now"}
              </div>
            </div>
          </motion.div>
        )}
      />
      <Modal.Window name={id}>
        <div className="flex flex-col rounded-xl border-4 border-slate-600 bg-slate-700 transition-colors">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-800">
            {imagePath ? (
              <img
                className="h-full w-full object-cover"
                src={getImageUrl(imagePath)}
                alt={title}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center text-3xl font-bold tracking-wider uppercase">
                <img
                  src="/sucrose_doubt.webp"
                  alt="confused image"
                  className="h-28 w-28"
                />
                No image set
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col justify-between px-4 py-4">
            <div>
              <h2 className="mb-2 text-center text-2xl font-semibold tracking-wide text-slate-200">
                {projectUrl ? (
                  <a
                    className="mx-auto flex w-fit justify-center hover:underline"
                    href={projectUrl}
                    target="_blank"
                  >
                    {title}
                    <HiMiniArrowTopRightOnSquare />
                  </a>
                ) : (
                  title
                )}
              </h2>
              <p className="text-md text-center text-slate-400 italic">
                "{tagline}"
              </p>
              <Divider noAnimate spacing="tiny" />
              <p className="px-4">{description}</p>
            </div>
            <div className="mt-2 flex justify-between">
              <p className="flex items-center gap-2">
                <HiOutlineUsers /> {teamSize === 1 ? "solo" : teamSize}
              </p>
              <div>
                {formatDateMonthYear(startDate)} &mdash;{" "}
                {endDate ? formatDateMonthYear(endDate) : "now"}
              </div>
            </div>
          </div>
        </div>
      </Modal.Window>
    </>
  );
}

export default ProjectCard;
