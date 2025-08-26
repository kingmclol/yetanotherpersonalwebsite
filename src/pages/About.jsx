import { usePreferences } from "../contexts/PreferencesProvider";
import PageTitle from "../ui/PageTitle";

function About() {
  const { reducedMotion } = usePreferences();
  return (
    <>
      <PageTitle title="About" subtitle="Hello there internet stranger" />
    </>
  );
}

export default About;
