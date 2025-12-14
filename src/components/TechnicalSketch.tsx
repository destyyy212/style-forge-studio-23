import { useDesignStore } from '@/store/designStore';
import { lengthOptions, colorOptions, fabricOptions } from '@/data/designOptions';
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

  const getSelectedFabric = () => {
    return fabricOptions.find(f => f.id === present.fabric);
  };

  const renderFabricPattern = (patternId: string) => {
    const fabric = getSelectedFabric();
    if (!fabric || fabric.pattern === 'solid') return null;

    const colors = fabric.colors;
    
    switch (fabric.pattern) {
      case 'floral':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="20" height="20">
            <rect width="20" height="20" fill={getSelectedColor()} />
            <circle cx="5" cy="5" r="3" fill={colors[0]} />
            <circle cx="15" cy="15" r="2" fill={colors[1] || colors[0]} />
            <circle cx="10" cy="12" r="1.5" fill={colors[2] || colors[0]} />
          </pattern>
        );
      case 'stripe':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="8" height="8">
            <rect width="8" height="8" fill={colors[1] || '#fff'} />
            <rect width="4" height="8" fill={colors[0]} />
          </pattern>
        );
      case 'polka':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="12" height="12">
            <rect width="12" height="12" fill={colors[1] || '#fff'} />
            <circle cx="3" cy="3" r="2" fill={colors[0]} />
            <circle cx="9" cy="9" r="2" fill={colors[0]} />
          </pattern>
        );
      case 'check':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="16" height="16">
            <rect width="16" height="16" fill={colors[1] || '#fff'} />
            <rect width="8" height="8" fill={colors[0]} />
            <rect x="8" y="8" width="8" height="8" fill={colors[0]} />
          </pattern>
        );
      case 'plaid':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="20" height="20">
            <rect width="20" height="20" fill={colors[0]} />
            <rect width="20" height="4" y="0" fill={colors[1]} opacity="0.5" />
            <rect width="20" height="4" y="10" fill={colors[1]} opacity="0.5" />
            <rect width="4" height="20" x="0" fill={colors[2] || colors[1]} opacity="0.5" />
            <rect width="4" height="20" x="10" fill={colors[2] || colors[1]} opacity="0.5" />
          </pattern>
        );
      case 'geometric':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="20" height="20">
            <rect width="20" height="20" fill={colors[2] || '#fff'} />
            <polygon points="0,0 10,0 5,10" fill={colors[0]} />
            <polygon points="10,10 20,10 15,20" fill={colors[1]} />
          </pattern>
        );
      case 'animal':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="24" height="24">
            <rect width="24" height="24" fill={colors[0]} />
            <ellipse cx="6" cy="8" rx="4" ry="3" fill={colors[1]} />
            <ellipse cx="18" cy="16" rx="3" ry="4" fill={colors[1]} />
            <ellipse cx="12" cy="20" rx="2" ry="2" fill={colors[2] || colors[1]} />
          </pattern>
        );
      case 'lace':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="16" height="16">
            <rect width="16" height="16" fill={colors[0]} />
            <circle cx="8" cy="8" r="6" fill="none" stroke={colors[1]} strokeWidth="0.5" />
            <circle cx="0" cy="0" r="4" fill="none" stroke={colors[1]} strokeWidth="0.5" />
            <circle cx="16" cy="16" r="4" fill="none" stroke={colors[1]} strokeWidth="0.5" />
          </pattern>
        );
      default:
        return null;
    }
  };

  const getFillStyle = (patternId: string) => {
    const fabric = getSelectedFabric();
    if (!fabric || fabric.pattern === 'solid') {
      return getSelectedColor();
    }
    return `url(#${patternId})`;
  };

  const renderDressSketch = (isFront: boolean = true) => {
    const height = getSketchHeight();
    const viewBoxHeight = Math.max(height + 60, 180);
    const patternId = `fabric-${isFront ? 'front' : 'back'}`;
    
    const getDressPath = () => {
      switch (present.silhouette) {
        case 'a-line':
          return `M35 25 L25 ${height + 20} L75 ${height + 20} L65 25 Q50 35 35 25`;
        case 'fitted':
          return `M32 25 L28 50 L35 ${height + 20} L65 ${height + 20} L72 50 L68 25 Q50 35 32 25`;
        case 'empire':
          return `M35 25 Q50 32 65 25 L65 35 L20 ${height + 20} L80 ${height + 20} L65 35`;
        case 'sheath':
          return `M33 25 L33 ${height + 20} L67 ${height + 20} L67 25 Q50 35 33 25`;
        case 'flared':
          return `M35 25 L35 50 L15 ${height + 20} L85 ${height + 20} L65 50 L65 25 Q50 35 35 25`;
        case 'mermaid':
          return `M33 25 L30 60 L25 ${height + 5} L20 ${height + 20} L80 ${height + 20} L75 ${height + 5} L70 60 L67 25 Q50 35 33 25`;
        case 'trumpet':
          return `M33 25 L32 45 L20 ${height + 20} L80 ${height + 20} L68 45 L67 25 Q50 35 33 25`;
        case 'ballgown':
          return `M38 25 Q50 32 62 25 L62 35 Q70 40 80 45 L85 ${height + 20} L15 ${height + 20} L20 45 Q30 40 38 35 Z`;
        case 'princess':
          return `M32 25 L30 ${height + 20} L70 ${height + 20} L68 25 Q50 35 32 25`;
        case 'shift':
          return `M30 25 L28 ${height + 20} L72 ${height + 20} L70 25 Q50 32 30 25`;
        case 'wrap':
          return `M32 25 L30 ${height + 20} L70 ${height + 20} L68 25 Q50 35 32 25`;
        case 'peplum':
          return `M33 25 L30 45 L22 55 L25 60 L75 60 L78 55 L70 45 L67 25 Q50 35 33 25 M25 60 L28 ${height + 20} L72 ${height + 20} L75 60`;
        case 'tent':
          return `M38 25 L15 ${height + 20} L85 ${height + 20} L62 25 Q50 32 38 25`;
        default:
          return `M30 25 L30 ${height + 20} L70 ${height + 20} L70 25 Q50 35 30 25`;
      }
    };
    
    return (
      <svg 
        width="140" 
        height={viewBoxHeight} 
        viewBox={`0 0 100 ${viewBoxHeight}`}
        className="transition-all duration-300"
      >
        <defs>
          {renderFabricPattern(patternId)}
        </defs>

        <g stroke="hsl(var(--sketch-line))" strokeWidth="0.8">
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

          {/* Body shape with fabric pattern */}
          <path d={getDressPath()} fill={getFillStyle(patternId)} />

          {/* Princess seam lines */}
          {present.silhouette === 'princess' && (
            <>
              <path d={`M40 25 L38 ${height + 20}`} fill="none" strokeDasharray="3 2" />
              <path d={`M60 25 L62 ${height + 20}`} fill="none" strokeDasharray="3 2" />
            </>
          )}

          {/* Wrap overlay line */}
          {present.silhouette === 'wrap' && isFront && (
            <path d={`M50 25 L35 50 L45 ${height + 15}`} fill="none" strokeDasharray="3 2" />
          )}

          {/* Sleeves with fabric */}
          {present.sleeve === 'cap' && (
            <>
              <path d="M30 25 L22 30 L25 35 L30 32" fill={getFillStyle(patternId)} />
              <path d="M70 25 L78 30 L75 35 L70 32" fill={getFillStyle(patternId)} />
            </>
          )}
          {present.sleeve === 'short' && (
            <>
              <path d="M30 25 L18 35 L22 42 L30 38" fill={getFillStyle(patternId)} />
              <path d="M70 25 L82 35 L78 42 L70 38" fill={getFillStyle(patternId)} />
            </>
          )}
          {present.sleeve === 'elbow' && (
            <>
              <path d="M30 25 L15 45 L20 52 L30 45" fill={getFillStyle(patternId)} />
              <path d="M70 25 L85 45 L80 52 L70 45" fill={getFillStyle(patternId)} />
            </>
          )}
          {present.sleeve === 'three-quarter' && (
            <>
              <path d="M30 25 L12 55 L18 62 L30 50" fill={getFillStyle(patternId)} />
              <path d="M70 25 L88 55 L82 62 L70 50" fill={getFillStyle(patternId)} />
            </>
          )}
          {present.sleeve === 'long' && (
            <>
              <path d="M30 25 L10 75 L16 82 L30 60" fill={getFillStyle(patternId)} />
              <path d="M70 25 L90 75 L84 82 L70 60" fill={getFillStyle(patternId)} />
            </>
          )}
          {present.sleeve === 'bell' && (
            <>
              <path d="M30 25 L10 70 L5 80 L25 75 L30 55" fill={getFillStyle(patternId)} />
              <path d="M70 25 L90 70 L95 80 L75 75 L70 55" fill={getFillStyle(patternId)} />
            </>
          )}
          {present.sleeve === 'puff' && (
            <>
              <ellipse cx="22" cy="30" rx="10" ry="8" fill={getFillStyle(patternId)} />
              <ellipse cx="78" cy="30" rx="10" ry="8" fill={getFillStyle(patternId)} />
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
          {present.ruffle === 'cascade' && (
            <path 
              d={`M20 ${height + 10} Q30 ${height + 25} 35 ${height + 15} Q45 ${height + 30} 50 ${height + 18} Q60 ${height + 32} 65 ${height + 15} Q75 ${height + 28} 80 ${height + 10}`} 
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
          {isFront && present.pocket === 'kangaroo' && (
            <path d="M35 50 Q50 60 65 50 L65 70 L35 70 Z" strokeWidth="0.8" fill="none" />
          )}

          {/* Back closure indicators (only for back view) */}
          {!isFront && present.backClosure === 'zipper-center' && (
            <line x1="50" y1="25" x2="50" y2={height} stroke="hsl(var(--sketch-line))" strokeWidth="1.5" />
          )}
          {!isFront && present.backClosure === 'zipper-side' && (
            <line x1="30" y1="30" x2="30" y2="70" stroke="hsl(var(--sketch-line))" strokeWidth="1.5" />
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
          {!isFront && present.backClosure === 'keyhole' && (
            <ellipse cx="50" cy="35" rx="5" ry="8" fill="none" strokeWidth="1" />
          )}
          {!isFront && present.backClosure === 'open-back' && (
            <path d="M35 25 L35 60 Q50 70 65 60 L65 25" fill="none" strokeWidth="1" strokeDasharray="3 2" />
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