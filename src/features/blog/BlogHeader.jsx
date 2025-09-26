import { format } from "date-fns";
import { motion } from "motion/react";
import { HiLockOpen } from "react-icons/hi";
import { HiChatBubbleLeftEllipsis, HiLockClosed } from "react-icons/hi2";
import Divider from "../../ui/Divider";
import Section from "../../ui/Section";
import { fadeInFromLeft, fadeInFromRight } from "../../utils/animationVariants";
function BlogHeader({ post }) {
  const {
    title,
    published_at: datePosted,
    updated_at: dateUpdated,
    locked,
  } = post;
  return (
    <>
      <Divider spacing="small" />
      <Section className="mx-auto flex w-4/5 flex-col items-stretch">
        <motion.h1
          variants={fadeInFromLeft}
          className="mb-2 text-center text-3xl font-bold tracking-wide"
        >
          {title}
        </motion.h1>

        <div className="flex justify-between gap-12 px-4 text-slate-400">
          <Section>
            <motion.p variants={fadeInFromLeft}>
              Posted:{" "}
              {datePosted
                ? format(new Date(datePosted), "yyyy-MM-dd hh:mm")
                : "Never"}
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              Updated:{" "}
              {dateUpdated
                ? format(new Date(dateUpdated), "yyyy-MM-dd hh:mm")
                : "Never"}
            </motion.p>
          </Section>
          <Section className="flex flex-col items-start">
            <motion.div
              className="flex items-center justify-center gap-2"
              variants={fadeInFromRight}
            >
              <HiChatBubbleLeftEllipsis /> 0
            </motion.div>
            <motion.div
              className="flex items-center justify-center gap-2 uppercase"
              variants={fadeInFromRight}
            >
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
            </motion.div>
          </Section>
        </div>
      </Section>
      <Divider spacing="small" />
    </>
  );
}

export default BlogHeader;
