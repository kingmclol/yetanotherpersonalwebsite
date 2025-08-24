import { useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function AppLayout() {
  const containerRef = useRef(null);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Navbar />
      <main
        ref={containerRef}
        className="flex flex-col overflow-auto items-center px-8 pt-4 pb-2"
      >
        <div className="flex-1 max-w-4xl">
          <Outlet context={{ containerRef }} />
        </div>
        <Footer />
      </main> 
    </div>
  );
}

export default AppLayout;
