interface SearchProps {
  value: string;
  onChange(value: string): void;
}

export default function Search({ value, onChange }: SearchProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <input
        type="text"
        placeholder="Поиск"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900/50 focus:bg-white dark:focus:bg-gray-800 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900 transition-all outline-none text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder-gray-400"
      />
    </div>
  );
}
