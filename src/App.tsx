import NoteList from "./features/NoteList/NoteList";
import NoteForm from "./features/NoteForm/NoteForm";
import type { NoteType } from "./@types/types";
import Header from "./shared/ui/Header/Header";
import useLocalStorage from "./shared/hooks/useLocalStorage/useLocalStorage";
import { useState } from "react";
import Search from "./features/Search/Search";

const STORAGE_KEY = "notes";

function App() {
  // Загружаем заметки из localStorage, сортируем по id (новые сверху)
  const [notes, setNotes] = useLocalStorage<NoteType[]>(STORAGE_KEY, []);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Добавление заметки (новая – в начало)
  const addNote = (newNote: NoteType): void => {
    setNotes((prev: NoteType[]) => [newNote, ...prev]);
  };

  //Удаление заметки
  const handleDelete = (id: number) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const filteredNotes = notes.filter((note) =>
    note.title.includes(searchQuery),
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <Header countNotes={notes.length} />

        {/* Форма создания */}
        <NoteForm onAddNote={addNote} />

        {/* {Поиск} */}
        <Search value={searchQuery} onChange={setSearchQuery} />

        {/* Список заметок */}
        <NoteList notes={filteredNotes} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
