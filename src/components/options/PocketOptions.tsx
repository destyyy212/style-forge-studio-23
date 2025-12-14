interface PocketOption {
  id: string;
  name: string;
  description: string;
}

interface PocketOptionsProps {
  options: PocketOption[];
  selected: string;
  onSelect: (id: string) => void;
}

const pocketIcons: Record<string, React.ReactNode> = {
  'no-pocket': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M15 10L12 45H38L35 10H15Z" />
      <path d="M18 20H32" strokeDasharray="2 2" />
    </svg>
  ),
  'side-seam': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M15 10L12 45H38L35 10H15Z" />
      <path d="M13 22L17 22L17 32L13 32" strokeWidth="1.5" />
      <path d="M37 22L33 22L33 32L37 32" strokeWidth="1.5" />
    </svg>
  ),
  'patch': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M15 10L12 45H38L35 10H15Z" />
      <rect x="18" y="24" width="14" height="12" rx="1" />
      <path d="M18 24H32" strokeWidth="1.5" />
    </svg>
  ),
  'welt': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M15 10L12 45H38L35 10H15Z" />
      <path d="M18 26H32" strokeWidth="2" />
      <path d="M19 26L19 30L31 30L31 26" strokeDasharray="2 2" />
    </svg>
  ),
  'kangaroo': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M15 10L12 45H38L35 10H15Z" />
      <path d="M16 28C16 28 20 24 25 24C30 24 34 28 34 28" strokeWidth="1.5" />
      <path d="M16 28L16 38L34 38L34 28" />
    </svg>
  ),
};

export function PocketOptions({ options, selected, onSelect }: PocketOptionsProps) {
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
          <div className="h-14 flex items-center justify-center text-sketch-line">
            {pocketIcons[option.id] || pocketIcons['no-pocket']}
          </div>
          <span className="text-xs font-medium text-foreground text-center">
            {option.name}
          </span>
        </button>
      ))}
    </div>
  );
}
