import { createContext, useReducer } from "react";

//Типы и интерфейсы
export type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
}

type ThemeAction =
  | { type: "TOGGLE_THEME" }
  | { type: "SET_THEME"; payload: Theme };

//Начальное состояние
const initialState: ThemeState = { theme: "light" };

//Редьюсер
function ThemeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return { theme: state.theme === "dark" ? "light" : "dark" };
    }
    case "SET_THEME": {
      return { theme: action.payload };
    }
    default:
      return state;
  }
}
//Контекст
interface ThemeContextValue {
  state: ThemeState;
  dispatch: React.Dispatch<ThemeAction>;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
//Провайдер
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
