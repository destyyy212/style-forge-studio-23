import { DesignCategory } from '@/types/design';

interface DesignSidebarProps {
  activeCategory: DesignCategory;
  onCategoryChange: (category: DesignCategory) => void;
}

const categories: { id: DesignCategory; label: string; icon: React.ReactNode }[] = [
  {
    id: 'silhouettes',
    label: 'SILHOUETTES',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 4L10 8V12L8 28H24L22 12V8L16 4Z" />
        <path d="M12 12H20" />
      </svg>
    ),
  },
  {
    id: 'necklines',
    label: 'NECKLINES',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 16C8 16 12 12 16 12C20 12 24 16 24 16" />
        <path d="M10 10L16 14L22 10" />
        <path d="M12 18V24" />
        <path d="M20 18V24" />
      </svg>
    ),
  },
  {
    id: 'backClosures',
    label: 'BACK CLOSURES',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 6L16 10L22 6" />
        <path d="M16 10V26" />
        <path d="M12 14L16 14" />
        <path d="M16 14L20 14" />
        <path d="M12 18L16 18" />
        <path d="M16 18L20 18" />
        <path d="M12 22L16 22" />
        <path d="M16 22L20 22" />
      </svg>
    ),
  },
  {
    id: 'sleeves',
    label: 'SLEEVES',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 8L6 20L10 22V28" />
        <path d="M24 8L26 20L22 22V28" />
        <path d="M10 8H22" />
        <path d="M10 12H22" />
      </svg>
    ),
  },
  {
    id: 'ruffles',
    label: 'RUFFLES',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 12C8 10 10 12 12 10C14 12 16 10 18 12C20 10 22 12 24 10C26 12 26 14 26 14" />
        <path d="M6 18C8 16 10 18 12 16C14 18 16 16 18 18C20 16 22 18 24 16C26 18 26 20 26 20" />
        <path d="M6 24C8 22 10 24 12 22C14 24 16 22 18 24C20 22 22 24 24 22C26 24 26 26 26 26" />
      </svg>
    ),
  },
  {
    id: 'pockets',
    label: 'POCKETS',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="10" width="16" height="14" rx="2" />
        <path d="M8 14H24" />
        <path d="M12 18H20" />
      </svg>
    ),
  },
  {
    id: 'color',
    label: 'COLOR',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="10" />
        <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 'fabric',
    label: 'FABRIC',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="6" width="20" height="20" rx="2" />
        <path d="M6 12H26" />
        <path d="M6 18H26" />
        <path d="M6 24H26" />
        <path d="M12 6V26" />
        <path d="M18 6V26" />
      </svg>
    ),
  },
];

export function DesignSidebar({ activeCategory, onCategoryChange }: DesignSidebarProps) {
  return (
    <aside className="w-20 bg-card border-r border-border flex flex-col items-center py-4 gap-1 overflow-y-auto scrollbar-thin">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`sidebar-item w-full ${
            activeCategory === category.id ? 'sidebar-item-active' : ''
          }`}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            {category.icon}
          </div>
          <span className="text-[9px] font-medium tracking-wide text-center leading-tight">
            {category.label}
          </span>
        </button>
      ))}
    </aside>
  );
}
