import ThemeToggle from "../theme-toggle";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";

export default function Navbar() {
  // light-dark mode
  const { isDark, toggleButton } = useTheme();
  return (
    <div className="p-5 xl:py-5 xl:px-0 mx-auto 2xl:max-w-7xl flex items-center justify-between ">
      <Link to={"/"} className="font-bold text-lg text-[#E3496D]">
        Automation Hub
      </Link>

      <div className="flex gap-2 items-center">
        <a
          target="_blank"
          href="https://neightn.indie-demo.com/form/fac08fac-5408-43dc-826f-d942b35ee538"
          rel="noopener noreferrer"
          className="hidden md:block text-sm px-4 py-2 rounded-full font-medium bg-chart-4 dark:bg-white dark:text-black hover:opacity-90"
        >
          Request Automation
        </a>
        <ThemeToggle isDark={isDark} toggleButton={toggleButton} />
      </div>
    </div>
  );
}
