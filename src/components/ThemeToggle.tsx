import React from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/50 transition-all active:scale-95 flex items-center gap-2 shadow-sm"
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-400" />
      )}
      <span className="text-xs font-semibold tracking-wide">
        {theme === 'dark' ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};