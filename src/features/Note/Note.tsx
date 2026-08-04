import type { NoteType } from "../../@types/types";

interface NoteProps extends NoteType {
  onDelete(): void;
}

export default function Note({ title, content, tags, onDelete }: NoteProps) {
  const tagsArray = Array.isArray(tags) ? tags : tags ? [tags] : [];

  return (
    <li className="group w-full transition-all duration-200 hover:-translate-y-0.5">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100/80 p-5 flex items-start gap-4 transition-all">
        {/* Контент */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-slate-800 leading-tight">
            {title}
          </h3>
          {content && (
            <p className="mt-1.5 text-slate-600 leading-relaxed whitespace-pre-wrap">
              {content}
            </p>
          )}
          {tagsArray.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {tagsArray.map((tag, i) => (
                <span
                  key={i}
                  className="inline-block px-3 py-1 text-xs font-medium text-white bg-linear-to-br from-indigo-400 to-indigo-600 rounded-full shadow-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Кнопка удаления */}
        <button
          onClick={onDelete}
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-200"
          aria-label="Удалить заметку"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}
