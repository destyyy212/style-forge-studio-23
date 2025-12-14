import { FabricOption } from '@/types/design';

interface FabricOptionsProps {
  options: FabricOption[];
  selected: string;
  onSelect: (id: string) => void;
}

const fabricPatterns: Record<string, (colors: string[]) => React.ReactNode> = {
  solid: (colors) => (
    <div className="w-full h-full rounded" style={{ backgroundColor: colors[0] || '#333' }} />
  ),
  floral: (colors) => (
    <svg className="w-full h-full" viewBox="0 0 40 40">
      <rect width="40" height="40" fill={colors[2] || '#228b22'} fillOpacity="0.3" />
      <circle cx="10" cy="10" r="4" fill={colors[0]} />
      <circle cx="30" cy="10" r="3" fill={colors[1]} />
      <circle cx="20" cy="20" r="4" fill={colors[0]} />
      <circle cx="10" cy="30" r="3" fill={colors[1]} />
      <circle cx="30" cy="30" r="4" fill={colors[0]} />
      <circle cx="5" cy="20" r="2" fill={colors[2] || colors[0]} />
      <circle cx="35" cy="20" r="2" fill={colors[2] || colors[1]} />
    </svg>
  ),
  stripe: (colors) => (
    <svg className="w-full h-full" viewBox="0 0 40 40">
      <rect width="40" height="40" fill={colors[1]} />
      <rect x="0" width="4" height="40" fill={colors[0]} />
      <rect x="8" width="4" height="40" fill={colors[0]} />
      <rect x="16" width="4" height="40" fill={colors[0]} />
      <rect x="24" width="4" height="40" fill={colors[0]} />
      <rect x="32" width="4" height="40" fill={colors[0]} />
    </svg>
  ),
  polka: (colors) => (
    <svg className="w-full h-full" viewBox="0 0 40 40">
      <rect width="40" height="40" fill={colors[1]} />
      <circle cx="10" cy="10" r="3" fill={colors[0]} />
      <circle cx="30" cy="10" r="3" fill={colors[0]} />
      <circle cx="20" cy="20" r="3" fill={colors[0]} />
      <circle cx="10" cy="30" r="3" fill={colors[0]} />
      <circle cx="30" cy="30" r="3" fill={colors[0]} />
    </svg>
  ),
  check: (colors) => (
    <svg className="w-full h-full" viewBox="0 0 40 40">
      <rect width="40" height="40" fill={colors[1]} />
      <rect x="0" y="0" width="20" height="20" fill={colors[0]} fillOpacity="0.5" />
      <rect x="20" y="20" width="20" height="20" fill={colors[0]} fillOpacity="0.5" />
    </svg>
  ),
  plaid: (colors) => (
    <svg className="w-full h-full" viewBox="0 0 40 40">
      <rect width="40" height="40" fill={colors[0]} />
      <rect x="0" width="10" height="40" fill={colors[1]} fillOpacity="0.5" />
      <rect x="20" width="10" height="40" fill={colors[1]} fillOpacity="0.5" />
      <rect y="0" width="40" height="10" fill={colors[2]} fillOpacity="0.5" />
      <rect y="20" width="40" height="10" fill={colors[2]} fillOpacity="0.5" />
    </svg>
  ),
  geometric: (colors) => (
    <svg className="w-full h-full" viewBox="0 0 40 40">
      <rect width="40" height="40" fill={colors[2]} />
      <polygon points="20,5 35,35 5,35" fill={colors[0]} />
      <polygon points="20,15 30,30 10,30" fill={colors[1]} />
    </svg>
  ),
  abstract: (colors) => (
    <svg className="w-full h-full" viewBox="0 0 40 40">
      <rect width="40" height="40" fill="#fff" />
      <circle cx="10" cy="15" r="12" fill={colors[0]} fillOpacity="0.6" />
      <circle cx="30" cy="25" r="10" fill={colors[1]} fillOpacity="0.6" />
      <circle cx="20" cy="35" r="8" fill={colors[2]} fillOpacity="0.6" />
    </svg>
  ),
  animal: (colors) => (
    <svg className="w-full h-full" viewBox="0 0 40 40">
      <rect width="40" height="40" fill={colors[0]} />
      <ellipse cx="12" cy="12" rx="5" ry="3" fill={colors[1]} transform="rotate(30 12 12)" />
      <ellipse cx="28" cy="8" rx="4" ry="2" fill={colors[1]} transform="rotate(-20 28 8)" />
      <ellipse cx="8" cy="28" rx="4" ry="2" fill={colors[1]} transform="rotate(45 8 28)" />
      <ellipse cx="25" cy="25" rx="5" ry="3" fill={colors[1]} transform="rotate(-30 25 25)" />
      <ellipse cx="35" cy="35" rx="3" ry="2" fill={colors[1]} />
    </svg>
  ),
  lace: (colors) => (
    <svg className="w-full h-full" viewBox="0 0 40 40">
      <rect width="40" height="40" fill={colors[0]} />
      <pattern id="lace" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="5" cy="5" r="3" fill="none" stroke={colors[1] || '#ddd'} strokeWidth="0.5" />
      </pattern>
      <rect width="40" height="40" fill="url(#lace)" />
    </svg>
  ),
  velvet: (colors) => (
    <div className="w-full h-full rounded bg-gradient-to-br" style={{ 
      background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[0]}dd 50%, ${colors[0]} 100%)` 
    }} />
  ),
  satin: (colors) => (
    <div className="w-full h-full rounded" style={{ 
      background: `linear-gradient(135deg, ${colors[0]}88 0%, ${colors[0]} 30%, ${colors[0]}ee 50%, ${colors[0]} 70%, ${colors[0]}88 100%)` 
    }} />
  ),
  denim: (colors) => (
    <svg className="w-full h-full" viewBox="0 0 40 40">
      <rect width="40" height="40" fill={colors[0]} />
      <line x1="0" y1="0" x2="40" y2="40" stroke={colors[1]} strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="10" y1="0" x2="50" y2="40" stroke={colors[1]} strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="-10" y1="0" x2="30" y2="40" stroke={colors[1]} strokeWidth="0.5" strokeOpacity="0.3" />
    </svg>
  ),
};

export function FabricOptions({ options, selected, onSelect }: FabricOptionsProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {options.map((option) => {
        const PatternComponent = fabricPatterns[option.pattern] || fabricPatterns.solid;
        return (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`flex flex-col items-center gap-1.5 group`}
          >
            <div
              className={`w-14 h-14 rounded-lg border-2 overflow-hidden transition-all duration-200 ${
                selected === option.id
                  ? 'border-primary ring-2 ring-primary/30 scale-105'
                  : 'border-border hover:border-primary/50 hover:scale-105'
              }`}
            >
              {PatternComponent(option.colors)}
            </div>
            <span className="text-[9px] font-medium text-muted-foreground group-hover:text-foreground text-center leading-tight">
              {option.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
