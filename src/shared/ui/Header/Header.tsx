interface HeaderProps {
  countNotes: number;
}

export default function Header({ countNotes }: HeaderProps) {
  return (
    <header className="text-center mb-10">
      <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight flex items-center justify-center gap-3">
        <span className="text-indigo-500">📒</span> Мои заметки ({countNotes})
      </h1>
      <p className="text-slate-500 mt-1 text-lg">Организуй свои мысли</p>
    </header>
  );
}
