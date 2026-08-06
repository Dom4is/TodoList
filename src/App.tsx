import { useEffect, useState } from "react";
import NoteList from "./features/NoteList/NoteList";
import NoteForm from "./features/NoteForm/NoteForm";
import type { NoteType } from "./@types/types";
import Header from "./shared/ui/Header/Header";

const STORAGE_KEY = "notes";

function App() {
  // Загружаем заметки из localStorage, сортируем по id (новые сверху)
  const [notes, setNotes] = useState<NoteType[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    try {
      const parsed = JSON.parse(saved);
      // Сортируем по убыванию id (новые сверху)
      return parsed.sort((a: NoteType, b: NoteType) => b.id - a.id);
    } catch {
      return [];
    }
  });

  // Сохраняем в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  // Добавление заметки (новая – в начало)
  const addNote = (newNote: NoteType) => {
    setNotes((prev) => [newNote, ...prev]);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <Header countNotes={notes.length} />

        {/* Форма создания */}
        <NoteForm onAddNote={addNote} />

        {/* Список заметок */}
        <NoteList notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
}

export default App;
