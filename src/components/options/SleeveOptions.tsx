interface SleeveOption {
  id: string;
  name: string;
  description: string;
}

interface SleeveOptionsProps {
  options: SleeveOption[];
  selected: string;
  onSelect: (id: string) => void;
}

const sleeveIcons: Record<string, React.ReactNode> = {
  'sleeveless': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M18 10C18 10 15 12 15 18V40" />
      <path d="M32 10C32 10 35 12 35 18V40" />
      <path d="M18 10H32" />
    </svg>
  ),
  'cap': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M18 10C18 10 12 10 10 15C8 20 12 22 15 20V40" />
      <path d="M32 10C32 10 38 10 40 15C42 20 38 22 35 20V40" />
      <path d="M18 10H32" />
    </svg>
  ),
  'short': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M18 10C18 10 10 10 6 18C4 22 8 24 12 22L15 20V40" />
      <path d="M32 10C32 10 40 10 44 18C46 22 42 24 38 22L35 20V40" />
      <path d="M18 10H32" />
    </svg>
  ),
  'elbow': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M18 10C18 10 8 10 4 20C2 26 6 28 10 26L15 22V40" />
      <path d="M32 10C32 10 42 10 46 20C48 26 44 28 40 26L35 22V40" />
      <path d="M18 10H32" />
    </svg>
  ),
  'three-quarter': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M18 10C18 10 6 10 2 22C0 30 4 32 8 30L15 24V40" />
      <path d="M32 10C32 10 44 10 48 22C50 30 46 32 42 30L35 24V40" />
      <path d="M18 10H32" />
    </svg>
  ),
  'long': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M18 10C18 10 6 10 2 25C0 36 4 38 8 36L15 28V40" />
      <path d="M32 10C32 10 44 10 48 25C50 36 46 38 42 36L35 28V40" />
      <path d="M18 10H32" />
    </svg>
  ),
  'bell': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M18 10C18 10 8 10 4 22C2 28 -2 38 4 38L15 30V40" />
      <path d="M32 10C32 10 42 10 46 22C48 28 52 38 46 38L35 30V40" />
      <path d="M18 10H32" />
    </svg>
  ),
  'puff': (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M18 10C18 10 5 8 4 18C3 24 8 24 12 22L15 20V40" />
      <path d="M32 10C32 10 45 8 46 18C47 24 42 24 38 22L35 20V40" />
      <ellipse cx="10" cy="16" rx="8" ry="6" strokeDasharray="2 2" />
      <ellipse cx="40" cy="16" rx="8" ry="6" strokeDasharray="2 2" />
      <path d="M18 10H32" />
    </svg>
  ),
};

export function SleeveOptions({ options, selected, onSelect }: SleeveOptionsProps) {
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
            {sleeveIcons[option.id] || sleeveIcons['sleeveless']}
          </div>
          <span className="text-xs font-medium text-foreground text-center">
            {option.name}
          </span>
        </button>
      ))}
    </div>
  );
}
