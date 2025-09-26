import { format } from "date-fns";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";
import { HiCalendarDays, HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { fadeInFromBottom } from "../../utils/animationVariants";
import { useQueryClient } from "@tanstack/react-query";

const MotionLink = motion.create(Link);

function getColors(published) {
  return published
    ? "border-slate-600 hover:border-slate-400 bg-slate-700"
    : "bg-slate-800 border-slate-700 hover:border-slate-600 text-slate-500";
}

function BlogCard({ post }) {
  const queryClient = useQueryClient();
  const {
    title,
    locked,
    published_at: datePosted,
    subtitle,
    id,
    published,
  } = post;
  return (
    <MotionLink
      to={`/blog/${id}`}
      onClick={() => queryClient.setQueryData(["post", id], post)}
      variants={fadeInFromBottom}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className={`flex cursor-pointer rounded-xl border-4 px-4 py-2 transition-colors ${getColors(published)}`}
    >
      <div className="flex-1">
        <h2
          className={`mb-2 border-b-2 border-b-slate-500 text-2xl font-semibold tracking-wide text-slate-${published ? "200" : "400"}`}
        >
          {title}
        </h2>
        <p className={`text-slate-${published ? "300" : "400"} italic`}>
          {subtitle}
        </p>
      </div>
      <div className="flex flex-col items-start justify-around border-l-2 border-l-slate-500 pl-4 font-semibold tracking-wide">
        <div className="flex items-center justify-center gap-2">
          <HiChatBubbleLeftEllipsis /> 0
        </div>
        <div className="flex items-center justify-center gap-2 uppercase">
          {locked ? (
            <>
              <HiLockClosed />
              Locked
            </>
          ) : (
            <>
              <HiLockOpen />
              Unlocked
            </>
          )}
        </div>
        <div className="flex items-center justify-center gap-2 uppercase">
          <HiCalendarDays />
          {format(new Date(datePosted), "yyyy-MM-dd")}
        </div>
      </div>
    </MotionLink>
  );
}

export default BlogCard;
