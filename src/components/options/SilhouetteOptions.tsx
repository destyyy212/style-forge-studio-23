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
  'mermaid': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M21 10L18 20V50L12 70H48L42 50V20L39 10H21Z" />
      <path d="M18 50H42" strokeDasharray="2 2" />
    </svg>
  ),
  'trumpet': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M21 10L18 20V40L10 70H50L42 40V20L39 10H21Z" />
      <path d="M18 40H42" strokeDasharray="2 2" />
    </svg>
  ),
  'ballgown': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M23 10L20 18H40L37 10H23Z" />
      <path d="M20 18Q15 25 5 70H55Q45 25 40 18" />
      <ellipse cx="30" cy="45" rx="20" ry="5" strokeDasharray="2 2" />
    </svg>
  ),
  'princess': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M20 10L15 20V70H45V20L40 10H20Z" />
      <path d="M25 10L23 70" strokeDasharray="3 2" />
      <path d="M35 10L37 70" strokeDasharray="3 2" />
    </svg>
  ),
  'shift': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M18 10L15 18V70H45V18L42 10H18Z" />
      <path d="M15 30H45" strokeDasharray="2 2" />
    </svg>
  ),
  'wrap': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M20 10L15 20V70H45V20L40 10H20Z" />
      <path d="M30 10L20 35L30 70" strokeDasharray="3 2" />
    </svg>
  ),
  'peplum': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M21 10L18 20V35H42V20L39 10H21Z" />
      <path d="M15 35Q10 40 12 45H48Q50 40 45 35" />
      <path d="M18 45V70H42V45" />
    </svg>
  ),
  'tent': (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M25 10L20 15L5 70H55L40 15L35 10H25Z" />
      <path d="M20 20H40" strokeDasharray="2 2" />
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