import Anchor from "../ui/Anchor";
import PageTitle from "../ui/PageTitle";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import contacts from "../data/contacts";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Divider from "../ui/Divider";
import { motion } from "motion/react";
import { fadeInFromBottom, fadeInFromLeft } from "../utils/animationVariants";
import QAList from "../ui/QAList";
import QACard from "../ui/QACard";
function About() {
  return (
    <>
      <PageTitle
        title="About"
        subtitle="Why is writing about myself so difficult?"
      />
      <Section className="space-y-4" staggerChildren={0.05}>
        <SectionHeader>Hi there!</SectionHeader>
        <motion.p variants={fadeInFromLeft}>
          My name is Freeman Wang, and I'm a computer science student studying
          at the University of Toronto.
        </motion.p>
        <motion.p variants={fadeInFromLeft}>
          Brace yourself
          for what's to come, as most of this is just filler. I had to put
          something on this page instead of leaving it empty.
        </motion.p>
        <motion.p variants={fadeInFromLeft}>
          There will not be any pictures of me here. It goes against my design
          choices for this website. Yes, there are design choices. I didn't
          say that they are good.
        </motion.p>
        <motion.p variants={fadeInFromLeft}>
          If you <em>really</em> want to see what I look like{" "}
          <small>(...why?)</small> an image is available in my{" "}
          <Anchor
            href={contacts.find((contact) => contact.name === "LinkedIn")}
            openNewTab
          >
            LinkedIn
            <HiArrowTopRightOnSquare />
          </Anchor>{" "}
          profile. And yes, this is an elaborate ploy to increase my view
          numbers.
        </motion.p>
        <motion.p variants={fadeInFromLeft}>
          Now, considering that I already made a component for a Q&A section
          (see homepage), why shouldn't I just reuse that component for{" "}
          <em>this</em> page? Seems pretty efficient to me, and definitely not
          because I'm lazy. Praise React!
        </motion.p>
      </Section>
      <Divider />
      <Section>
        <SectionHeader>
          Here comes the Q&AList component (for the second time).
        </SectionHeader>
        <QAList>
          <QACard title="Do you have any interests or hobbies?">
            <motion.p variants={fadeInFromLeft}>No.</motion.p>
            <motion.p variants={fadeInFromLeft}>
              Or, more accurately, there are things that I'm interested in, but
              not nearly enough so to actually delve deep into it. For example,
              I can claim that I'm interested in anime, manga, games, etc., but
              when queried on the finer details or having anything to show for
              it I got nothing lol ¯\_(ツ)_/¯
              <br />
              <br />
              But for the sake of content to fill the page,
            </motion.p>
            <motion.p>
              The main game that I play is <strong>Genshin Impact</strong>.
              Other games that I've played include Hollow Knight (+ Silksong),
              Celeste, Elden Ring, Sekiro, Peak, CSGO. About a few years ago, I
              realized that PvP/competitive games just aren't fune for me
              anymore. Hence why I only play Genshin, as it's a casual
              singleplayer game. Not that you should play it, because it is
              technically legal gambling.
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              Anime and Manga I usually look at whatever is interesting. I don't
              tend to look at them with scruitny, but instead more for the
              entertainment factor. A list of anime I prefer slightly more than
              the others for varying reasons include:{" "}
              <em>
                Steins;Gate, Bocchi the Rock!, Monogatari Series, Madoka Magica,
                Too Many Losing Heroines, Frieren
              </em>
              .
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              I'm also interested in drawing (manga/anime-style of course). Yes,
              I know I should just pick up a pencil and do it. I've tried, and
              that didn't work out. Yes, I know I should keep going. But you can
              say that to anyone, about everything, but actions speak louder
              than words. And words cannot always force action. Maybe I will,
              maybe I won't. At least I'm self-aware of it.
            </motion.p>
          </QACard>
          <QACard title="Alright, what about any career-related interests?">
            <motion.p variants={fadeInFromLeft}>
              That's difficult. Because as stated above, I don't really have
              much passion in anything, and this includes my degree and career
              prospects. Do I <em>like</em> coding? Not really. It's also in a
              questionable position due to AI.
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              My skills primarily lean towards frontend development at the
              moment. This does not include "design" or "user-experience" as I
              just jumped straight into React. No prior experience. And as you
              can see from this website (and my other project, Paimon's Sticker
              Stash), I'm not quite good at it, at least in the "eye candy"
              aspect of it.
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              I do hope that I can gain experience with backend, so I can become
              a larping "full-stack" developer with hopefully enough skills to
              start making applications of my own. Ignoring the fact that I need
              to have ideas for such an app in the first place. AI taking over
              frontend definitely has no impact in my focus pivoting at all, no
              sir.
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              Although to be <em>truly</em> honest, I wish to become a game dev.
              However, there are the obvious issues: employability, job
              prospects, a completely different skillset required, and
              potentially the other "artistic" skills. 3D modelling. Art and
              animation. Music. SFX/VFX. Game design and gameplay. Writing and
              lore. All cool things, but it's basically a superset of the
              drawing thing mentioned above. Not happening anytime soon. Maybe
              if I get a stable job I can look into this.
            </motion.p>
          </QACard>
          <QACard title="Why did you choose computer science?">
            <motion.p variants={fadeInFromLeft}>
              Honestly? Because I didn't really know what else to do. I was
              debating towards going into engineering, since I really liked all
              of the math and "creating" hardware projects with things like
              Arduinos and Raspberry Pis in highscool. The things I created, I
              could actually see it interacting with the world compared to a
              Python program on a screen.
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              However, the physical portion of engineering turned me off because
              in the world of reality there are many other factors that you
              cannot control. With code, the computer does exactly what you tell
              it to do. That's it. So all you need to know is what <em>you</em>{" "}
              are doing. Easy, right?
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              I'm also interested in AI/ML because I forsee it drastically
              changing the future job market, whether for the better or worse.
              Traditional application development is going to be changed to have
              AI assisting, if not outright replacing, many developers. While
              this may introduce tech debt (and the eventual Great Token
              Crunch), as long as it's "good enough" AI will make it harder to
              find a job. For those who already have one, it makes it far
              "easier."
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              So either I join the dark side and do AI/ML research, or try to
              speedrun the market to get enough job security/employability
              before it's too late. Fun. Pretty much what I expected from
              computer science, as it's so competitive. How did I get accepted
              to this program again?
            </motion.p>
          </QACard>
          <QACard title="Pineapple on pizza?">
            <motion.p variants={fadeInFromLeft}>
              Yeah sure why not, personally I like hawaiian pizza but I'm not a
              weirdo to judge people by what they put on a pizza
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              My borrowed words of wisdom is that if the customer is always
              right. After all, they're the one paying for and eating the food,
              not you. Maybe their late grandmother liked pineapple on pizza,
              and it's the anniversary of her passing. That or they know what
              food they want to eat.
            </motion.p>
          </QACard>
        </QAList>
      </Section>
      <Section className="mt-[100vh]">
        <SectionHeader>Alright, I lied. Here you go.</SectionHeader>
        <motion.p className="text-center pb-4">
          It's the same one in my{" "}
          <Anchor
            href={contacts.find((contact) => contact.name === "LinkedIn")}
            openNewTab
          >
            LinkedIn
            <HiArrowTopRightOnSquare />
          </Anchor>{" "}
          but it's upright at least
        </motion.p>
        <motion.img
          variants={fadeInFromBottom}
          src="https://smcmradcaegdmqovagxx.supabase.co/storage/v1/object/public/misc-images/me.jpg"
          alt="literally me"
          className="mx-auto w-1/4 rounded-lg"
        />
      </Section>
    </>
  );
}

export default About;
