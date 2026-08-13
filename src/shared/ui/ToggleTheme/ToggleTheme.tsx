import useTheme from "../../hooks/useTheme/useTheme";

export default function ToggleTheme() {
  const { state, dispatch } = useTheme();

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 "
    >
      {state.theme === "light" ? "🌙 Тёмная" : "☀️ Светлая"}
    </button>
  );
}
