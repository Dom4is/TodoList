import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

//Хук для удобного пользования

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("Оберни в провайдер");
  }
  return context;
}
