import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollProgress from "./ScrollProgress";
import { usePreferences } from "../contexts/PreferencesProvider";

function AppLayout() {
  const containerRef = useRef(null);
  const { reducedMotion } = usePreferences();
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Navbar />
      <main
        ref={containerRef}
        className="flex flex-col items-center overflow-auto px-8 pt-8 pb-2"
      >
        <div className="max-w-4xl flex-1">
          {!reducedMotion && <ScrollProgress containerRef={containerRef} />}
          <Outlet context={{ containerRef }} />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default AppLayout;
