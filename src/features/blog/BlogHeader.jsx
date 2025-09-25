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
    created_at: datePosted,
    updated_at: dateUpdated,
    locked,
  } = post;
  return (
    <>
      <Divider spacing="small" />
      <Section>
        <motion.h1
          variants={fadeInFromLeft}
          className="mb-2 text-center text-4xl font-bold tracking-wide"
        >
          {title}
        </motion.h1>

        <div className="flex justify-around gap-12 text-slate-400">
          <Section>
            <motion.p variants={fadeInFromLeft}>
              Posted: {format(new Date(datePosted), "yyyy-MM-dd hh:mm")}
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              Updated: {format(new Date(dateUpdated), "yyyy-MM-dd hh:mm")}
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
