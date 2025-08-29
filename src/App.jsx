import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  ScrollRestoration,
} from "react-router-dom";
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Project from "./pages/Project";

const queryClient = new QueryClient();

// TODO: Use a data router with createBrowserRouter so can use ScrollRestoration

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="bottom-right"
        gutter={8}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#334155", // bg-slate-700
            color: "#cbd5e1", // text-slate-300
          },
        }}
      />
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
                <Route path="/project/:slug" element={<Project />} />
                <Route
                  path="/i-want-to-break-this-website"
                  element={<BrokenPage />}
                />
              </Route>
            </Routes>
          </ErrorBoundary>
        </BrowserRouter>
      </PreferencesContextProvider>
    </QueryClientProvider>
  );
}

export default App;
