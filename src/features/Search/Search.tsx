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
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all outline-none text-slate-800 placeholder:text-slate-400"
      />
    </div>
  );
}
