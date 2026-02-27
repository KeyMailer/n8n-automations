// icons
import { Sun, Moon } from "lucide-react";

/* context shape */
type ThemeContextType = {
  isDark: boolean;
  toggleButton: () => void;
};

export default function ThemeToggle({
  isDark,
  toggleButton,
}: ThemeContextType) {
  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          checked={isDark}
          onChange={toggleButton}
          type="checkbox"
          className="sr-only peer"
        />

        {/* Switch background (shortened from w-13 → w-11) */}
        <div className="w-11 h-6 bg-[#E5E7EB] rounded-full peer-checked:bg-[#18181B] transition-colors duration-300"></div>

        {/* Switch knob with icons */}
        <span className="absolute left-0.5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full bg-white text-primary-dark shadow-md transition-all duration-300 peer-checked:translate-x-5 peer-checked:text-primary-dark">
          {isDark ? <Moon size={13} /> : <Sun size={13} />}
        </span>
      </label>
    </div>
  );
}
