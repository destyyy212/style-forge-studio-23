interface BackClosureOption {
  id: string;
  name: string;
  description: string;
}

interface BackClosureOptionsProps {
  options: BackClosureOption[];
  selected: string;
  onSelect: (id: string) => void;
}

const backClosureIcons: Record<string, React.ReactNode> = {
  'zipper-center': (
    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 5L20 10L30 5" />
      <path d="M10 5V55" />
      <path d="M30 5V55" />
      <line x1="20" y1="15" x2="20" y2="50" strokeWidth="2" />
      <rect x="17" y="12" width="6" height="4" fill="currentColor" />
    </svg>
  ),
  'zipper-side': (
    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 5L20 10L30 5" />
      <path d="M10 5V55" />
      <path d="M30 5V55" />
      <line x1="10" y1="20" x2="10" y2="45" strokeWidth="2" />
      <rect x="7" y="18" width="6" height="3" fill="currentColor" />
    </svg>
  ),
  'buttons': (
    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 5L20 10L30 5" />
      <path d="M10 5V55" />
      <path d="M30 5V55" />
      <circle cx="20" cy="18" r="2.5" />
      <circle cx="20" cy="28" r="2.5" />
      <circle cx="20" cy="38" r="2.5" />
      <circle cx="20" cy="48" r="2.5" />
    </svg>
  ),
  'open-back': (
    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 5L20 10L30 5" />
      <path d="M10 5V15" />
      <path d="M30 5V15" />
      <path d="M10 40V55" />
      <path d="M30 40V55" />
      <path d="M10 15C10 15 15 35 20 40C25 35 30 15 30 15" strokeDasharray="3 2" />
    </svg>
  ),
  'keyhole': (
    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 5L20 10L30 5" />
      <path d="M10 5V55" />
      <path d="M30 5V55" />
      <circle cx="20" cy="22" r="6" />
      <path d="M20 28V38" strokeWidth="4" />
    </svg>
  ),
  'lace-up': (
    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 5L20 10L30 5" />
      <path d="M10 5V55" />
      <path d="M30 5V55" />
      <path d="M12 15L28 20L12 25L28 30L12 35L28 40L12 45" strokeWidth="1" />
    </svg>
  ),
};

export function BackClosureOptions({ options, selected, onSelect }: BackClosureOptionsProps) {
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
          <div className="h-16 flex items-center justify-center text-sketch-line">
            {backClosureIcons[option.id] || backClosureIcons['zipper-center']}
          </div>
          <span className="text-xs font-medium text-foreground text-center">
            {option.name}
          </span>
        </button>
      ))}
    </div>
  );
}
