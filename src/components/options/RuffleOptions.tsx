interface RuffleOption {
  id: string;
  name: string;
  description: string;
}

interface RuffleOptionsProps {
  options: RuffleOption[];
  selected: string;
  onSelect: (id: string) => void;
}

const ruffleIcons: Record<string, React.ReactNode> = {
  'no-ruffle': (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 35H50" />
      <path d="M15 15V35" />
      <path d="M45 15V35" />
      <path d="M15 15H45" strokeDasharray="2 2" />
    </svg>
  ),
  'single': (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M15 15V28" />
      <path d="M45 15V28" />
      <path d="M15 15H45" strokeDasharray="2 2" />
      <path d="M8 28C12 26 16 30 20 28C24 26 28 30 32 28C36 26 40 30 44 28C48 26 52 30 52 28" />
      <path d="M8 33C12 31 16 35 20 33C24 31 28 35 32 33C36 31 40 35 44 33C48 31 52 35 52 33" />
    </svg>
  ),
  'double': (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M15 15V22" />
      <path d="M45 15V22" />
      <path d="M15 15H45" strokeDasharray="2 2" />
      <path d="M8 22C12 20 16 24 20 22C24 20 28 24 32 22C36 20 40 24 44 22C48 20 52 24 52 22" />
      <path d="M8 27C12 25 16 29 20 27C24 25 28 29 32 27C36 25 40 29 44 27C48 25 52 29 52 27" />
      <path d="M8 32C12 30 16 34 20 32C24 30 28 34 32 32C36 30 40 34 44 32C48 30 52 34 52 32" />
      <path d="M8 37C12 35 16 39 20 37C24 35 28 39 32 37C36 35 40 39 44 37C48 35 52 39 52 37" />
    </svg>
  ),
  'flounce': (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M15 15V25" />
      <path d="M45 15V25" />
      <path d="M15 15H45" strokeDasharray="2 2" />
      <path d="M10 25C10 25 15 35 20 30C25 25 30 38 35 30C40 25 50 35 50 25" />
    </svg>
  ),
  'cascade': (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M15 15V22" />
      <path d="M45 15V22" />
      <path d="M15 15H45" strokeDasharray="2 2" />
      <path d="M15 22C20 20 25 28 30 25C35 22 40 32 45 28" />
      <path d="M12 26C17 24 22 32 27 29C32 26 37 36 42 32" />
      <path d="M10 30C15 28 20 36 25 33C30 30 35 40 40 36" />
    </svg>
  ),
};

export function RuffleOptions({ options, selected, onSelect }: RuffleOptionsProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`option-card flex flex-col items-center gap-2 ${
            selected === option.id ? 'option-card-active' : ''
          }`}
        >
          <div className="h-12 flex items-center justify-center text-sketch-line">
            {ruffleIcons[option.id] || ruffleIcons['no-ruffle']}
          </div>
          <span className="text-xs font-medium text-foreground text-center">
            {option.name}
          </span>
        </button>
      ))}
    </div>
  );
}
