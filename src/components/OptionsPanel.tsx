import { DesignCategory } from '@/types/design';
import { useDesignStore } from '@/store/designStore';
import {
  silhouetteOptions,
  necklineOptions,
  backClosureOptions,
  sleeveOptions,
  ruffleOptions,
  pocketOptions,
  colorOptions,
  fabricOptions,
} from '@/data/designOptions';
import { SilhouetteOptions } from './options/SilhouetteOptions';
import { NecklineOptions } from './options/NecklineOptions';
import { BackClosureOptions } from './options/BackClosureOptions';
import { SleeveOptions } from './options/SleeveOptions';
import { RuffleOptions } from './options/RuffleOptions';
import { PocketOptions } from './options/PocketOptions';
import { ColorOptions } from './options/ColorOptions';
import { FabricOptions } from './options/FabricOptions';

interface OptionsPanelProps {
  category: DesignCategory;
  onClose: () => void;
}

export function OptionsPanel({ category, onClose }: OptionsPanelProps) {
  const { present, setDesign } = useDesignStore();

  const getCategoryTitle = () => {
    switch (category) {
      case 'silhouettes': return 'SILHOUETTES';
      case 'necklines': return 'NECKLINES';
      case 'backClosures': return 'BACK CLOSURES';
      case 'sleeves': return 'SLEEVES';
      case 'ruffles': return 'RUFFLES';
      case 'pockets': return 'POCKETS';
      case 'color': return 'COLORS';
      case 'fabric': return 'FABRICS';
    }
  };

  const renderOptions = () => {
    switch (category) {
      case 'silhouettes':
        return (
          <SilhouetteOptions
            options={silhouetteOptions}
            selected={present.silhouette}
            onSelect={(id) => setDesign('silhouette', id)}
          />
        );
      case 'necklines':
        return (
          <NecklineOptions
            options={necklineOptions}
            selected={present.neckline}
            onSelect={(id) => setDesign('neckline', id)}
          />
        );
      case 'backClosures':
        return (
          <BackClosureOptions
            options={backClosureOptions}
            selected={present.backClosure}
            onSelect={(id) => setDesign('backClosure', id)}
          />
        );
      case 'sleeves':
        return (
          <SleeveOptions
            options={sleeveOptions}
            selected={present.sleeve}
            onSelect={(id) => setDesign('sleeve', id)}
          />
        );
      case 'ruffles':
        return (
          <RuffleOptions
            options={ruffleOptions}
            selected={present.ruffle}
            onSelect={(id) => setDesign('ruffle', id)}
          />
        );
      case 'pockets':
        return (
          <PocketOptions
            options={pocketOptions}
            selected={present.pocket}
            onSelect={(id) => setDesign('pocket', id)}
          />
        );
      case 'color':
        return (
          <ColorOptions
            options={colorOptions}
            selected={present.color}
            onSelect={(id) => setDesign('color', id)}
          />
        );
      case 'fabric':
        return (
          <FabricOptions
            options={fabricOptions}
            selected={present.fabric}
            onSelect={(id) => setDesign('fabric', id)}
          />
        );
    }
  };

  return (
    <div className="w-80 bg-card border-r border-border flex flex-col animate-slide-in">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h2 className="text-sm font-semibold text-foreground tracking-wide">
          {getCategoryTitle()}
        </h2>
        <button
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 5L5 15M5 5L15 15" />
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-thin p-4">
        {renderOptions()}
      </div>
    </div>
  );
}
