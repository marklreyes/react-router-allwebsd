import { TbLoader3 } from "react-icons/tb";
import { useTheme } from "~/context/ThemeContext";

export default function Loading() {
  const { theme } = useTheme();

  return (
    <div className={`fixed inset-0 ${theme.background} flex items-center justify-center z-50 min-h-screen w-full`}>
      <div className={`${theme.primary} ${theme.text} p-4 rounded-lg flex items-center gap-2`}>
        <TbLoader3 className="w-6 h-6 animate-spin" />
        <span>Loading...</span>
      </div>
    </div>
  );
}
