interface SilhouetteOption {
  id: string;
  name: string;
  description: string;
}

interface SilhouetteOptionsProps {
  options: SilhouetteOption[];
  selected: string;
  onSelect: (id: string) => void;
}

const silhouetteIcons: Record<string, React.ReactNode> = {
  'straight-bust': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M20 10L15 20V30L12 70H48L45 30V20L40 10H20Z" />
      <path d="M18 30H42" strokeDasharray="2 2" />
    </svg>
  ),
  'a-line': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M22 10L17 20V30L8 70H52L43 30V20L38 10H22Z" />
      <path d="M19 30H41" strokeDasharray="2 2" />
    </svg>
  ),
  'fitted': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M20 10L16 20L18 35L15 70H45L42 35L44 20L40 10H20Z" />
      <path d="M19 30H41" strokeDasharray="2 2" />
    </svg>
  ),
  'empire': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M22 10L18 18H42L38 10H22Z" />
      <path d="M18 18L10 70H50L42 18" />
      <path d="M18 18H42" />
    </svg>
  ),
  'sheath': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M21 10L18 20V70H42V20L39 10H21Z" />
      <path d="M20 30H40" strokeDasharray="2 2" />
    </svg>
  ),
  'flared': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M22 10L18 20V35L5 70H55L42 35V20L38 10H22Z" />
      <path d="M20 35H40" strokeDasharray="2 2" />
    </svg>
  ),
};

export function SilhouetteOptions({ options, selected, onSelect }: SilhouetteOptionsProps) {
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
          <div className="h-20 flex items-center justify-center text-sketch-line">
            {silhouetteIcons[option.id] || silhouetteIcons['straight-bust']}
          </div>
          <span className="text-xs font-medium text-foreground text-center">
            {option.name}
          </span>
        </button>
      ))}
    </div>
  );
}
