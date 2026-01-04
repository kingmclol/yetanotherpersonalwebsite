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
      <Section className="space-y-4">
        <SectionHeader>Hi there!</SectionHeader>
        <motion.p variants={fadeInFromLeft}>
          My name is Freeman Wang, and I'm a second-year computer science
          student studying at the University of Toronto (St. George campus).
          Sigh. Brace yourself for what's to come.
        </motion.p>
        <motion.p variants={fadeInFromLeft}>
          Please note that there won't be any picture of me here. It's too
          embarassing and goes against the theme of my website (primarily
          text-based). No, it's not because I'm too lazy to make a 2-column
          grid/flexbox container that would adhere to adaptive design.
          Definitely not.
        </motion.p>
        <motion.p variants={fadeInFromLeft}>
          If you <em>really</em> want to see what I look like{" "}
          <small>(please lower your expectations)</small> an image is available
          in my{" "}
          <Anchor
            href={contacts.find((contact) => contact.name === "LinkedIn")}
            openNewTab
          >
            LinkedIn
            <HiArrowTopRightOnSquare />
          </Anchor>{" "}
          profile—and yes, this is an elaborate ploy to increase my view
          numbers. Not like it would work since you either come here through
          seeing it on my LinkedIn, Discord, or by me showing you directly.
        </motion.p>

        <motion.p variants={fadeInFromLeft}>
          Now, considering that I already made components for a Q&A section, why
          shouldn't I just reuse that component for this about page? Seems
          pretty efficient to me, and fits in nicely over mindlessly listing out
          interesting things about myself. It also saves me the effort of
          formatting things so everything looks pretty, as I already did the
          styling beforehand. Praise React!
        </motion.p>
      </Section>
      <Divider />
      <Section>
        <SectionHeader>Here comes the Q&AList component.</SectionHeader>
        <QAList>
          <QACard title="Any interests?">
            <motion.p variants={fadeInFromLeft}>
              Hm. This one is already a hard one to answer. It's easy to say
              that I have many interests, but those are in general barely
              scratch the surface. For example, I watch anime and read manga.
              But how deep does my interest go? I like to consume such media,
              but I don't go to conventions, participate in discussions, etc.
              I'm basically just, uh, too casual, you know?
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              So yeah. Anime, Manga. Next in the list is obviously video games.
              Again, I'm not a dedicated game fanatic. I played stuff like Elden
              Ring, Silksong, CSGO (yes, GO not 2 since I stopped a while ago),
              Minecraft... but none to the point where I'm like an "expert."
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              The only game that I consistently play is, well... Genshin Impact.
              For the record,{" "}
              <strong>
                beyond opportunity costs of time, I have not spent any money on
                the game. I also do not recommend playing Genshin, due to its
                gacha (lootbox-style) monetization.
              </strong>{" "}
              The thing I like about Genshin is that it's very casual focused.
              Basically, when I was playing PVP games, I realized, "damn, people
              try way too hard on this." Perhaps I don't have that strong of a
              competitive nature anymore, so I pivoted to PVE games instead.
              Also, Genshin's music is really good. Full stop.
            </motion.p>
          </QACard>
          <QACard title="Hobbies?">
            <motion.p variants={fadeInFromLeft}>
              Hobbies... well, one of my dreams is to be able to draw. Or to
              able to create might be the better word. The concept of turning
              idea into reality, whether it be an image, video, game, etc. But
              damn, I suck at this. I draw daily (ever since January, since I
              saw a friend doing the same) and the improvement is really, really
              slow. Compared to learning some math or cs stuff, drawing is just
              too abstract to comprehend.
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              There's all this argument about "talent" and what not, so I'll
              provide my take. Learning a skill can be modelled as a function of
              time. This function has an initial value, and of course can be
              differentiated.
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              When people talk about talent, I believe they look at the intial
              skill ("oh, you're so talented, being this good at the start") or
              the current skill—("wow, you're talented at this"). I view talent
              as the first and second derivative of the learning function. That
              is, how skill improves over time. Two people can put five years of
              effort in their craft, yet emerge entirely different in levels of
              mastery.
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              Unfortunately, for drawing and stuff, it's really hard. There's a
              physical aspect of drawing that there's no way around. I can know
              the theory, but if I can't execute it... well... anyways, that's
              why my improvement is so slow. That's not to say that I'll give up
              completely, though. Maybe one day I'll get good, and add a
              drawings section to this website. Although a full rewrite is
              liklier to come first.
            </motion.p>
          </QACard>
          <QACard title="Why did you choose computer science?">
            <motion.p variants={fadeInFromLeft}>
              Honestly? Because I didn't really know what else to do. I was
              debating towards going into computer engineering, since I really
              liked all of the math and "creating" things with like Arduinos.
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              But again, the physical part of that turned me off because in the
              world of reality there are many other factors that you can't
              control (flashback to when I had a perpetually loose wire
              somewhere). With code, the computer does what you tell it to do.
              That's it. Both a blessing and a curse.
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              I'm also interested in AI/ML but I have no idea where to start,
              and courses for machine learning only starts in third year. So, I
              decided to learn what I can understand (web dev) and now we're
              here. The funny thing is that this is self-taught, as I guess the
              more dedicated, practical courses only start in third year...
              let's see if I can land any internships with this. Not many high
              hopes.
            </motion.p>
          </QACard>
          <QACard title="Pineapple on pizza?">
            <motion.p variants={fadeInFromLeft}>
              Yeah sure why not, personally I like hawaiian pizza but I'm not a
              weirdo to judge people by what they put on a pizza
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              If you're some big famous chef and a customer asks you to cook
              something in a "wrong" way but in a way that they like it, would
              you blow up, saying that they're wrong for not liking the "proper"
              way, or just accept that the customer knows what they want? Maybe
              a quick confirmation is fine, but pushing it is too much.
            </motion.p>
          </QACard>
          <QACard title="What are your strengths and weaknesses?">
            <motion.p variants={fadeInFromLeft}>
              Easy to start with my weakness, because I'm sure you noticed it
              throughout this website. I have severe imposter syndrome. As in
              BAD, BAD imposter syndrome. When comparing myself to my peers, I
              realize that they are lightyears ahead of me in terms of social
              and professional life, and overall skills. That's not to say that
              I don't have any—but I constantly view myself at the lower end of
              the curve.
            </motion.p>
            <motion.p variants={fadeInFromLeft}>
              A strength would be... overthinking too much? Well, it's both a
              weakness and a strength as makes me be a lot more attentive to
              detail. Like, after I finish writing a test, I would check my
              answers over and over again until time runs up. And it works—I've
              caught many mistakes in the triple-checks I did. Or for debugging
              this website. What parts may break? What do I need to make sure it
              doesn't?
            </motion.p>
          </QACard>
        </QAList>
      </Section>
      <Divider />
      <Section className="mt-[70vh]">
        <SectionHeader>Alright, I lied. Here you go.</SectionHeader>
        <motion.img
          variants={fadeInFromBottom}
          src="https://smcmradcaegdmqovagxx.supabase.co/storage/v1/object/public/misc-images/me.jpg"
          alt="literally me"
          className="rounded-lg"
        />
      </Section>
    </>
  );
}

export default About;
