import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./app/store/store";
import { addNote, removeNote } from "./app/store/notesSlice";

import NoteList from "./features/NoteList/NoteList";
import NoteForm from "./features/NoteForm/NoteForm";
import type { NoteType } from "./@types/types";
import Header from "./shared/ui/Header/Header";
// import useLocalStorage from "./shared/hooks/useLocalStorage/useLocalStorage";
import { useEffect, useState } from "react";
import Search from "./features/Search/Search";
import useTheme from "./shared/hooks/useTheme/useTheme";

// const STORAGE_KEY = "notes";

function App() {
  // Загружаем заметки из localStorage, сортируем по id (новые сверху)
  // const [notes, setNotes] = useLocalStorage<NoteType[]>(STORAGE_KEY, []);
  const dispatch = useDispatch<AppDispatch>();
  const notes = useSelector((state: RootState) => state.notes.notes);

  const { state } = useTheme();

  useEffect(() => {
    // document.documentElement.setAttribute("data-theme", state.theme);
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme]);

  const [searchQuery, setSearchQuery] = useState<string>("");

  // Добавление заметки (новая – в начало)
  const handleAddNote = (newNote: NoteType): void => {
    dispatch(addNote(newNote));
  };

  //Удаление заметки
  const handleRemoveNote = (id: number) => {
    dispatch(removeNote(id));
  };

  const filteredNotes = notes.filter((note) =>
    note.title.includes(searchQuery),
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-950 py-10">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <Header countNotes={notes.length} />

        {/* Форма создания */}
        <NoteForm onAddNote={handleAddNote} />

        {/* {Поиск} */}
        <Search value={searchQuery} onChange={setSearchQuery} />

        {/* Список заметок */}
        <NoteList notes={filteredNotes} onDelete={handleRemoveNote} />
      </div>
    </div>
  );
}

export default App;
