import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Projects from "./pages/Projects";
import AppLayout from "./ui/AppLayout";
import { PreferencesContextProvider } from "./contexts/PreferencesProvider";
import BrokenPage from "./pages/BrokenPage";
import ErrorFallback from "./ui/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <PreferencesContextProvider>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/i-want-to-break-this-website"
                element={<BrokenPage />}
              />
            </Route>
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </PreferencesContextProvider>
  );
}

export default App;
