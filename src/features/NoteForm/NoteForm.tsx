import { useState } from "react";
import type { NoteType } from "../../@types/types";

interface FormProps {
  onAddNote(note: NoteType): void;
}

export default function NoteForm({ onAddNote }: FormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError("Название обязательно");
      return;
    }
    const tagsArray = tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    onAddNote({
      id: Date.now(),
      title: trimmedTitle,
      content: content.trim() || undefined,
      tags: tagsArray.length ? tagsArray : undefined,
    });
    setError("");
    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto mb-10">
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 border border-gray-100">
        <h2 className="text-2xl font-semibold text-slate-800 flex items-center gap-2">
          <span className="text-indigo-500">✍️</span> Новая заметка
        </h2>

        <div className="space-y-3">
          <div>
            <input
              value={title}
              type="text"
              placeholder="Заголовок *"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-slate-800 placeholder:text-slate-400"
            />
            {error && (
              <p className="mt-1.5 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg inline-block">
                ⚠️ {error}
              </p>
            )}
          </div>

          <textarea
            value={content}
            placeholder="Содержание (необязательно)"
            onChange={(e) => setContent(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all outline-none resize-y text-slate-800 placeholder:text-slate-400"
          />

          <input
            value={tags}
            type="text"
            placeholder="Теги через запятую (например: react, ui, идея)"
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-slate-800 placeholder:text-slate-400"
          />

          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-linear-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95"
          >
            + Добавить заметку
          </button>
        </div>
      </div>
    </form>
  );
}
