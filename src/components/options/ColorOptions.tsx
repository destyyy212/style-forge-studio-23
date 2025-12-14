import { ColorOption } from '@/types/design';

interface ColorOptionsProps {
  options: ColorOption[];
  selected: string;
  onSelect: (id: string) => void;
}

export function ColorOptions({ options, selected, onSelect }: ColorOptionsProps) {
  return (
    <div className="grid grid-cols-5 gap-3">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`flex flex-col items-center gap-1.5 group`}
        >
          <div
            className={`w-10 h-10 rounded-full border-2 transition-all duration-200 shadow-sm ${
              selected === option.id
                ? 'border-primary ring-2 ring-primary/30 scale-110'
                : 'border-border hover:border-primary/50 hover:scale-105'
            }`}
            style={{ backgroundColor: option.hex }}
          />
          <span className="text-[9px] font-medium text-muted-foreground group-hover:text-foreground text-center leading-tight">
            {option.name}
          </span>
        </button>
      ))}
    </div>
  );
}
