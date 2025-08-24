import { MotionGlobalConfig } from "motion";
import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const PreferencesContext = createContext();
function PreferencesContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "darkMode",
  );
  const [reducedMotion, setReducedMotion] = useLocalStorageState(
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    "reducedMotion",
  );

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  // Effect to keep skipAnimation option in sync with preference
  useEffect(() => {
    MotionGlobalConfig.skipAnimations = reducedMotion;
  }, [reducedMotion]);

  // // Apply dark or light class to root html element
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     document.documentElement.classList.remove("light");
  //   } else {
  //     document.documentElement.classList.add("light");
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  function toggleReducedMotion() {
    setReducedMotion((prev) => !prev);
  }
  return (
    <PreferencesContext.Provider
      value={{
        darkMode,
        reducedMotion,
        toggleDarkMode,
        toggleReducedMotion,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    console.error(
      "Tried to access preferences outside of PreferenceContextProvider",
    );
  }
  return context;
}

export { PreferencesContextProvider, usePreferences };
