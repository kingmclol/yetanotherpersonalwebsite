import { usePreferences } from "../contexts/PreferencesProvider";
import { fadeInFromLeft } from "../utils/animationVariants";
import Divider from "./Divider";
import Section from "./Section";
import TypeWriterText from "./TypeWriterText";

function PageTitle({ title, subtitle }) {
  const { reducedMotion } = usePreferences();
  return (
    <>
      <Section variants={fadeInFromLeft}>
        <h1 className="text-center text-4xl font-bold tracking-wide">
          {!reducedMotion ? (
            <TypeWriterText loop={false} words={[title]} />
          ) : (
            title
          )}
        </h1>
        {subtitle && (
          <p className="text-center text-xl tracking-wide text-slate-500 italic">
            {subtitle}
          </p>
        )}
      </Section>
      <Divider spacing="small" />
    </>
  );
}

export default PageTitle;
