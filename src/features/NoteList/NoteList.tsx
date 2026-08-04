import Note from "../Note/Note";
import type { NoteType } from "../../@types/types";

interface NoteListProps {
  notes: NoteType[];
  setNotes(notes: NoteType[] | ((prev: NoteType[]) => NoteType[])): void;
}

export default function NoteList({ notes, setNotes }: NoteListProps) {
  const handleDelete = (id: number) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  if (notes.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <div className="text-6xl mb-4">📭</div>
        <h3 className="text-2xl font-medium text-slate-700">
          Пока нет заметок
        </h3>
        <p className="text-slate-400 mt-1">Создайте свою первую заметку выше</p>
      </div>
    );
  }

  return (
    <ul className="w-full max-w-2xl mx-auto space-y-4">
      {notes.map((note) => (
        <Note key={note.id} {...note} onDelete={() => handleDelete(note.id)} />
      ))}
    </ul>
  );
}
