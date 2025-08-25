import { motion } from "motion/react";
import { FaAnglesDown } from "react-icons/fa6";
import {
  HiMiniArrowTopRightOnSquare,
  HiOutlineCircleStack,
  HiOutlineInformationCircle,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { usePreferences } from "../contexts/PreferencesProvider";
import { homePageWords } from "../data/homePageWords";
import Anchor from "../ui/Anchor";
import Button from "../ui/Button";
import Divider from "../ui/Divider";
import QACard from "../ui/QACard";
import QAList from "../ui/QAList";
import Section from "../ui/Section";
import TypeWriterText from "../ui/TypeWriterText";
import { fadeInFromBottom } from "../utils/animationVariants";

const MotionLink = motion.create(Link);

function Home() {
  const { reducedMotion, toggleReducedMotion } = usePreferences();
  return (
    <>
      <Section animateOnce>
        <h1 className="mt-40 text-center text-6xl">
          {!reducedMotion ? (
            <TypeWriterText
              words={homePageWords}
              loop={false}
              delayHoldWord={2000}
              delayNextWord={750}
              delay={50}
              delayDelete={20}
            />
          ) : (
            "Freeman Wang"
          )}
        </h1>
      </Section>
      <Divider animateOnce />
      <Section
        className="rounded-md bg-slate-600 px-4 py-4 text-center italic"
        delayChildren={1}
        staggerChildren={1}
        animateOnce
      >
        <h2 className="mb-4 text-2xl font-semibold tracking-wide not-italic">
          Welcome to my website. Everything is quite messy, though.
        </h2>
        <motion.p variants={fadeInFromBottom}>
          ...I definitely shouldn't have tried motion.
        </motion.p>
        <motion.p variants={fadeInFromBottom}>
          It's, um, very confusing.
        </motion.p>
        <motion.p variants={fadeInFromBottom}>
          But animations are cool...
        </motion.p>
      </Section>
      <Divider animateOnce />
      <motion.div className="mb-[60vh] flex items-center justify-center gap-2">
        <FaAnglesDown /> Scroll down for some Not very FAQ (to let the entry
        animations trigger)
        <FaAnglesDown />
      </motion.div>

      <Divider />
      <Section className="rounded-md px-4 text-center">
        <motion.h2
          variants={fadeInFromBottom}
          className="mb-8 text-2xl font-semibold tracking-wide"
        >
          Not very FAQ
        </motion.h2>
        <QAList>
          <QACard
            title={
              reducedMotion
                ? "Wait, this looks terrible. Can I get motion back?"
                : "I don't like motion. Where reduce motion button?"
            }
          >
            {
              <Button onClick={toggleReducedMotion}>
                {reducedMotion ? "Enable" : "Reduce"} Animations
              </Button>
            }
          </QACard>
          <QACard title="You know that animations aren't the most important, right?">
            <p>
              Look at the site without animations! It's way more boring that
              way. In my opinion, of course.
            </p>
            <p>
              It's <span className="text-xs">supposed</span> to be easy to do
              for quite large benefit. Key word being "supposed" since I'm
              having a bad time right now as this library is like what
            </p>
            <p>
              I won't deny that I may have gone a bit... overboard on this
              though since I'm treating it as a learning opportunity now. Just
              turn off them with the button above if they're too distracting.
            </p>
          </QACard>
          <QACard title="Skil— I mean, styling issue">
            <p>
              CSS is the stuff of nightmares man, I'm just hoping that
              tailwind's tastefully chosen classes can save me
            </p>
          </QACard>
          <QACard title="I found a problem. Where report?">
            <p>
              <span className="line-through">
                Uh if it's a performance problem i'm probably cooked
              </span>{" "}
              You can contact me, I guess. But adding an issue on the{" "}
              <Anchor href="">
                github
                <HiMiniArrowTopRightOnSquare />
              </Anchor>{" "}
              would probably work well enough.
            </p>
            <p>
              But animations sometimes failing to run is 100% not fixable (I'm
              way out of my league here this was supposed to be a quick 20
              minute adventure, in and out), and the bigger problem being that I
              literally cannot reproduce them so...
            </p>
          </QACard>
        </QAList>
      </Section>
      <Divider />
      <Section className="text-center">
        <h2 className="mx-auto mb-6 max-w-[500px] text-xl font-semibold tracking-wide">
          Head on over to one of THREE brand-new pages for some new content!
        </h2>
        <motion.div className="grid grid-cols-3 gap-2">
          <MotionLink
            variants={fadeInFromBottom}
            className="flex max-w-3xs flex-col items-center justify-start rounded-2xl py-2 transition-colors hover:bg-slate-800"
            to="/about"
          >
            <HiOutlineInformationCircle className="h-16 w-16" />
            <p className="font-semibold tracking-wide">About</p>
            <p className="text-slate-400 italic">Extra stuff about me</p>
          </MotionLink>
          <MotionLink
            variants={fadeInFromBottom}
            className="flex max-w-3xs flex-col items-center justify-start rounded-2xl py-2 transition-colors hover:bg-slate-800"
            to="/projects"
          >
            <HiOutlineCircleStack className="h-16 w-16" />
            <p className="font-semibold tracking-wide">Projects</p>
            <p className="text-slate-400 italic">
              ...why does this look off center?
            </p>
          </MotionLink>
          <MotionLink
            variants={fadeInFromBottom}
            className="flex max-w-3xs flex-col items-center justify-start rounded-2xl py-2 transition-colors hover:bg-slate-800"
            to="/contact"
          >
            <HiOutlineUser className="h-16 w-16" />
            <p className="font-semibold tracking-wide">Contact</p>
            <p className="text-slate-400 italic">
              Stuff you can see in the footer
            </p>
          </MotionLink>
        </motion.div>
      </Section>
    </>
  );
}

export default Home;
