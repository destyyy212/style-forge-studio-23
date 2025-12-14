import { useDesignStore } from '@/store/designStore';
import { lengthOptions, colorOptions } from '@/data/designOptions';
import { LengthOption, ViewOption } from '@/types/design';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function TechnicalSketch() {
  const { present, setLength, setView } = useDesignStore();

  const getSketchHeight = () => {
    const lengthData = lengthOptions.find(l => l.id === present.length);
    return lengthData?.height || 120;
  };

  const getSelectedColor = () => {
    const color = colorOptions.find(c => c.id === present.color);
    return color?.hex || '#1a1a1a';
  };

  const renderDressSketch = (isFront: boolean = true) => {
    const height = getSketchHeight();
    const color = getSelectedColor();
    const viewBoxHeight = Math.max(height + 60, 180);
    
    return (
      <svg 
        width="140" 
        height={viewBoxHeight} 
        viewBox={`0 0 100 ${viewBoxHeight}`}
        className="transition-all duration-300"
      >
        {/* Body outline */}
        <g fill={color} stroke="hsl(var(--sketch-line))" strokeWidth="0.8">
          {/* Neckline variations */}
          {present.neckline === 'v-neck' && (
            <path d={`M35 20 L50 ${35} L65 20`} fill="none" strokeWidth="1.2" />
          )}
          {present.neckline === 'round' && (
            <path d="M35 20 Q50 30 65 20" fill="none" strokeWidth="1.2" />
          )}
          {present.neckline === 'scoop' && (
            <path d="M32 18 Q50 35 68 18" fill="none" strokeWidth="1.2" />
          )}
          {present.neckline === 'boat' && (
            <path d="M30 18 L70 18" fill="none" strokeWidth="1.5" />
          )}
          {present.neckline === 'sweetheart' && (
            <path d="M35 22 Q42 18 50 25 Q58 18 65 22" fill="none" strokeWidth="1.2" />
          )}
          {present.neckline === 'halter' && (
            <path d="M40 25 L50 15 L60 25" fill="none" strokeWidth="1.2" />
          )}
          {present.neckline === 'square' && (
            <path d="M35 18 L35 25 L65 25 L65 18" fill="none" strokeWidth="1.2" />
          )}
          {present.neckline === 'cowl' && (
            <path d="M35 20 Q45 28 50 25 Q55 28 65 20" fill="none" strokeWidth="1.2" />
          )}

          {/* Body shape based on silhouette */}
          {present.silhouette === 'straight-bust' && (
            <path d={`M30 25 L30 ${height + 20} L70 ${height + 20} L70 25 Q50 35 30 25`} />
          )}
          {present.silhouette === 'a-line' && (
            <path d={`M35 25 L25 ${height + 20} L75 ${height + 20} L65 25 Q50 35 35 25`} />
          )}
          {present.silhouette === 'fitted' && (
            <path d={`M32 25 L28 50 L35 ${height + 20} L65 ${height + 20} L72 50 L68 25 Q50 35 32 25`} />
          )}
          {present.silhouette === 'empire' && (
            <path d={`M35 25 Q50 32 65 25 L65 35 L20 ${height + 20} L80 ${height + 20} L65 35`} />
          )}
          {present.silhouette === 'sheath' && (
            <path d={`M33 25 L33 ${height + 20} L67 ${height + 20} L67 25 Q50 35 33 25`} />
          )}
          {present.silhouette === 'flared' && (
            <path d={`M35 25 L35 50 L15 ${height + 20} L85 ${height + 20} L65 50 L65 25 Q50 35 35 25`} />
          )}

          {/* Sleeves */}
          {present.sleeve === 'cap' && (
            <>
              <path d="M30 25 L22 30 L25 35 L30 32" fill={color} />
              <path d="M70 25 L78 30 L75 35 L70 32" fill={color} />
            </>
          )}
          {present.sleeve === 'short' && (
            <>
              <path d="M30 25 L18 35 L22 42 L30 38" fill={color} />
              <path d="M70 25 L82 35 L78 42 L70 38" fill={color} />
            </>
          )}
          {present.sleeve === 'elbow' && (
            <>
              <path d="M30 25 L15 45 L20 52 L30 45" fill={color} />
              <path d="M70 25 L85 45 L80 52 L70 45" fill={color} />
            </>
          )}
          {present.sleeve === 'three-quarter' && (
            <>
              <path d="M30 25 L12 55 L18 62 L30 50" fill={color} />
              <path d="M70 25 L88 55 L82 62 L70 50" fill={color} />
            </>
          )}
          {present.sleeve === 'long' && (
            <>
              <path d="M30 25 L10 75 L16 82 L30 60" fill={color} />
              <path d="M70 25 L90 75 L84 82 L70 60" fill={color} />
            </>
          )}
          {present.sleeve === 'bell' && (
            <>
              <path d="M30 25 L10 70 L5 80 L25 75 L30 55" fill={color} />
              <path d="M70 25 L90 70 L95 80 L75 75 L70 55" fill={color} />
            </>
          )}
          {present.sleeve === 'puff' && (
            <>
              <ellipse cx="22" cy="30" rx="10" ry="8" fill={color} />
              <ellipse cx="78" cy="30" rx="10" ry="8" fill={color} />
            </>
          )}

          {/* Ruffles at hem */}
          {present.ruffle === 'single' && (
            <path 
              d={`M25 ${height + 18} Q35 ${height + 12} 45 ${height + 18} Q55 ${height + 24} 65 ${height + 18} Q75 ${height + 12} 75 ${height + 20}`} 
              fill="none" 
              strokeWidth="1" 
            />
          )}
          {present.ruffle === 'double' && (
            <>
              <path 
                d={`M25 ${height + 15} Q35 ${height + 10} 45 ${height + 15} Q55 ${height + 20} 65 ${height + 15} Q75 ${height + 10} 75 ${height + 15}`} 
                fill="none" 
              />
              <path 
                d={`M22 ${height + 22} Q35 ${height + 17} 45 ${height + 22} Q55 ${height + 27} 65 ${height + 22} Q78 ${height + 17} 78 ${height + 22}`} 
                fill="none" 
              />
            </>
          )}
          {present.ruffle === 'flounce' && (
            <path 
              d={`M22 ${height + 15} Q30 ${height + 25} 40 ${height + 18} Q50 ${height + 28} 60 ${height + 18} Q70 ${height + 25} 78 ${height + 15}`} 
              fill="none" 
              strokeWidth="1.2" 
            />
          )}

          {/* Pockets */}
          {isFront && present.pocket === 'patch' && (
            <>
              <rect x="35" y="55" width="12" height="15" rx="1" fill="none" strokeWidth="0.8" />
              <rect x="53" y="55" width="12" height="15" rx="1" fill="none" strokeWidth="0.8" />
            </>
          )}
          {isFront && present.pocket === 'welt' && (
            <>
              <line x1="35" y1="55" x2="45" y2="55" strokeWidth="1.5" />
              <line x1="55" y1="55" x2="65" y2="55" strokeWidth="1.5" />
            </>
          )}
          {isFront && present.pocket === 'side-seam' && (
            <>
              <path d="M30 50 L33 50 L33 65 L30 65" strokeWidth="1" fill="none" />
              <path d="M70 50 L67 50 L67 65 L70 65" strokeWidth="1" fill="none" />
            </>
          )}

          {/* Back closure indicators (only for back view) */}
          {!isFront && present.backClosure === 'zipper-center' && (
            <line x1="50" y1="25" x2="50" y2={height} stroke="hsl(var(--sketch-line))" strokeWidth="1.5" />
          )}
          {!isFront && present.backClosure === 'buttons' && (
            <>
              <circle cx="50" cy="35" r="2" fill="hsl(var(--sketch-line))" />
              <circle cx="50" cy="50" r="2" fill="hsl(var(--sketch-line))" />
              <circle cx="50" cy="65" r="2" fill="hsl(var(--sketch-line))" />
              <circle cx="50" cy="80" r="2" fill="hsl(var(--sketch-line))" />
            </>
          )}
          {!isFront && present.backClosure === 'lace-up' && (
            <path d="M45 30 L55 40 L45 50 L55 60 L45 70 L55 80" fill="none" strokeWidth="1" />
          )}
        </g>
      </svg>
    );
  };

  return (
    <div className="panel-section flex-1 flex flex-col">
      <div className="px-4 py-3 border-b border-panel-border">
        <h3 className="text-sm font-semibold text-foreground">TECHNICAL SKETCH</h3>
      </div>
      
      <div className="p-4 space-y-4">
        {/* Controls */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">LENGTH</label>
            <Select value={present.length} onValueChange={(val) => setLength(val as LengthOption)}>
              <SelectTrigger className="h-9 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover z-50">
                {lengthOptions.map((opt) => (
                  <SelectItem key={opt.id} value={opt.id}>
                    {opt.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1 block">VIEW</label>
            <Select value={present.view} onValueChange={(val) => setView(val as ViewOption)}>
              <SelectTrigger className="h-9 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover z-50">
                <SelectItem value="both">Both</SelectItem>
                <SelectItem value="front">Front</SelectItem>
                <SelectItem value="back">Back</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* View tabs */}
        <div className="flex gap-2 text-xs">
          <button 
            onClick={() => setView('both')}
            className={`px-3 py-1.5 rounded transition-colors ${present.view === 'both' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            BOTH
          </button>
          <button 
            onClick={() => setView('front')}
            className={`px-3 py-1.5 rounded transition-colors ${present.view === 'front' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            FRONT
          </button>
          <button 
            onClick={() => setView('back')}
            className={`px-3 py-1.5 rounded transition-colors ${present.view === 'back' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            BACK
          </button>
        </div>

        {/* Sketch display */}
        <div className="flex justify-center gap-6 py-4 min-h-[280px] items-center bg-muted/30 rounded-lg">
          {(present.view === 'both' || present.view === 'front') && (
            <div className="flex flex-col items-center gap-2">
              {renderDressSketch(true)}
              <span className="text-xs text-muted-foreground">Front</span>
            </div>
          )}
          {(present.view === 'both' || present.view === 'back') && (
            <div className="flex flex-col items-center gap-2">
              {renderDressSketch(false)}
              <span className="text-xs text-muted-foreground">Back</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
