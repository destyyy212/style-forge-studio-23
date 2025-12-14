interface NecklineOption {
  id: string;
  name: string;
  description: string;
}

interface NecklineOptionsProps {
  options: NecklineOption[];
  selected: string;
  onSelect: (id: string) => void;
}

const necklineIcons: Record<string, React.ReactNode> = {
  'round': (
    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 35V20C10 12 18 8 25 8C32 8 40 12 40 20V35" />
      <path d="M15 35C15 35 20 30 25 30C30 30 35 35 35 35" />
    </svg>
  ),
  'v-neck': (
    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 35V15L25 30L40 15V35" />
      <path d="M10 15L25 5L40 15" />
    </svg>
  ),
  'scoop': (
    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 35V18C10 10 17 5 25 5C33 5 40 10 40 18V35" />
      <path d="M12 35C12 35 18 28 25 28C32 28 38 35 38 35" />
    </svg>
  ),
  'boat': (
    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M5 15H45" strokeWidth="2" />
      <path d="M10 15V35" />
      <path d="M40 15V35" />
      <path d="M10 20C10 20 17 18 25 18C33 18 40 20 40 20" />
    </svg>
  ),
  'sweetheart': (
    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 35V20C10 15 14 12 18 14C22 16 25 20 25 20C25 20 28 16 32 14C36 12 40 15 40 20V35" />
    </svg>
  ),
  'halter': (
    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M15 35V20L25 5L35 20V35" />
      <path d="M25 5V0" strokeWidth="2" />
    </svg>
  ),
  'square': (
    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 35V12H40V35" />
      <path d="M10 12V8H40V12" strokeDasharray="2 2" />
    </svg>
  ),
  'cowl': (
    <svg width="50" height="40" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M10 35V15C10 15 15 20 25 25C35 20 40 15 40 15V35" />
      <path d="M10 15C10 15 17 10 25 10C33 10 40 15 40 15" />
    </svg>
  ),
};

export function NecklineOptions({ options, selected, onSelect }: NecklineOptionsProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`option-card flex flex-col items-center gap-2 py-4 ${
            selected === option.id ? 'option-card-active' : ''
          }`}
        >
          <div className="h-12 flex items-center justify-center text-sketch-line">
            {necklineIcons[option.id] || necklineIcons['round']}
          </div>
          <span className="text-[10px] font-medium text-foreground text-center leading-tight">
            {option.name}
          </span>
        </button>
      ))}
    </div>
  );
}
