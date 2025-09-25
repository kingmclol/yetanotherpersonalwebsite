import { useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { usePreferences } from "../contexts/PreferencesProvider";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollProgress from "./ScrollProgress";

function AppLayout() {
  const containerRef = useRef(null);
  const { reducedMotion } = usePreferences();
  const location = useLocation();

  useLayoutEffect(() => {
    // On location (route) change, scroll the main content container to top
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Navbar />
      <main
        ref={containerRef}
        tabIndex={-1}
        className="flex flex-col items-center overflow-auto pt-8 pb-2 md:px-8"
      >
        <div className="w-full flex-1 sm:w-xl md:w-2xl lg:w-4xl">
          {!reducedMotion && <ScrollProgress containerRef={containerRef} />}
          <Outlet context={{ containerRef }} />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default AppLayout;
