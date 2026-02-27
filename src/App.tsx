// react-router-dom
import { RouterProvider } from "react-router-dom";

// routes directory
import router from "./routes/main-route";

// light-dark mode context
import { ThemeProvider } from "./context/theme-context";

// shadcn components
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background dark:bg-background ">
          <RouterProvider router={router} />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}
