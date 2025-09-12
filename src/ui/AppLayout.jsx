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
        className="flex flex-col items-center overflow-auto px-8 pt-8 pb-2"
      >
        <div className="max-w-4xl min-w-xl flex-1">
          {!reducedMotion && <ScrollProgress containerRef={containerRef} />}
          <Outlet context={{ containerRef }} />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default AppLayout;
