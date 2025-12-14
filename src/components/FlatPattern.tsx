import { useDesignStore } from '@/store/designStore';
import { lengthOptions, colorOptions, fabricOptions } from '@/data/designOptions';

export function FlatPattern() {
  const { present } = useDesignStore();

  const getPatternHeight = () => {
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

  const height = getPatternHeight();
  const bodiceHeight = height * 0.35;
  const skirtHeight = height * 0.65;
  
  // Calculate widths based on silhouette
  const getSkirtBottomWidth = () => {
    switch (present.silhouette) {
      case 'a-line': return 90;
      case 'flared': return 110;
      case 'ballgown': return 130;
      case 'tent': return 120;
      case 'trumpet': return 100;
      case 'mermaid': return 85;
      case 'fitted': return 65;
      case 'sheath': return 60;
      case 'empire': return 100;
      default: return 70;
    }
  };

  const renderFabricPattern = (patternId: string) => {
    const fabric = getSelectedFabric();
    if (!fabric || fabric.pattern === 'solid') return null;
    const colors = fabric.colors;
    
    switch (fabric.pattern) {
      case 'floral':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="15" height="15">
            <rect width="15" height="15" fill={getSelectedColor()} />
            <circle cx="4" cy="4" r="2" fill={colors[0]} />
            <circle cx="11" cy="11" r="1.5" fill={colors[1] || colors[0]} />
          </pattern>
        );
      case 'stripe':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="6" height="6">
            <rect width="6" height="6" fill={colors[1] || '#fff'} />
            <rect width="3" height="6" fill={colors[0]} />
          </pattern>
        );
      case 'polka':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="10" height="10">
            <rect width="10" height="10" fill={colors[1] || '#fff'} />
            <circle cx="2" cy="2" r="1.5" fill={colors[0]} />
            <circle cx="7" cy="7" r="1.5" fill={colors[0]} />
          </pattern>
        );
      case 'check':
        return (
          <pattern id={patternId} patternUnits="userSpaceOnUse" width="12" height="12">
            <rect width="12" height="12" fill={colors[1] || '#fff'} />
            <rect width="6" height="6" fill={colors[0]} />
            <rect x="6" y="6" width="6" height="6" fill={colors[0]} />
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

  const skirtBottomWidth = getSkirtBottomWidth();
  const bodiceWidth = 55;

  // Calculate viewbox dimensions
  const totalWidth = 400;
  const totalHeight = Math.max(height + 150, 350);

  const renderFrontBodice = () => (
    <g transform="translate(20, 20)">
      <text x={bodiceWidth/2} y="-5" textAnchor="middle" fontSize="7" fill="hsl(var(--foreground))" fontWeight="500">FRONT BODICE</text>
      
      {/* Bodice shape based on neckline */}
      <path 
        d={`M0 ${present.neckline === 'v-neck' ? 15 : present.neckline === 'scoop' ? 12 : 8}
            ${present.neckline === 'v-neck' ? `L${bodiceWidth/2} 25 L${bodiceWidth} 15` : 
              present.neckline === 'scoop' ? `Q${bodiceWidth/2} 22 ${bodiceWidth} 12` :
              present.neckline === 'round' ? `Q${bodiceWidth/2} 18 ${bodiceWidth} 8` :
              present.neckline === 'square' ? `L0 15 L${bodiceWidth} 15 L${bodiceWidth} 8` :
              present.neckline === 'sweetheart' ? `Q${bodiceWidth*0.25} 5 ${bodiceWidth/2} 18 Q${bodiceWidth*0.75} 5 ${bodiceWidth} 8` :
              present.neckline === 'boat' ? `L${bodiceWidth} 8` :
              `Q${bodiceWidth/2} 15 ${bodiceWidth} 8`}
            L${bodiceWidth + 8} ${bodiceHeight}
            L-8 ${bodiceHeight}
            Z`}
        fill={getFillStyle('pattern-front-bodice')}
        stroke="hsl(var(--sketch-line))"
        strokeWidth="1"
      />
      
      {/* Bust darts */}
      <path d={`M${bodiceWidth*0.3} ${bodiceHeight*0.5} L${bodiceWidth*0.35} ${bodiceHeight*0.25} L${bodiceWidth*0.4} ${bodiceHeight*0.5}`} 
        fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d={`M${bodiceWidth*0.6} ${bodiceHeight*0.5} L${bodiceWidth*0.65} ${bodiceHeight*0.25} L${bodiceWidth*0.7} ${bodiceHeight*0.5}`} 
        fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />

      {/* Waist darts */}
      <path d={`M${bodiceWidth*0.25} ${bodiceHeight} L${bodiceWidth*0.3} ${bodiceHeight*0.7} L${bodiceWidth*0.35} ${bodiceHeight}`} 
        fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d={`M${bodiceWidth*0.65} ${bodiceHeight} L${bodiceWidth*0.7} ${bodiceHeight*0.7} L${bodiceWidth*0.75} ${bodiceHeight}`} 
        fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />

      {/* Grain line */}
      <line x1={bodiceWidth/2} y1="25" x2={bodiceWidth/2} y2={bodiceHeight - 5} stroke="hsl(var(--sketch-line))" strokeWidth="0.5" />
      <polygon points={`${bodiceWidth/2},25 ${bodiceWidth/2 - 3},32 ${bodiceWidth/2 + 3},32`} fill="hsl(var(--sketch-line))" />
      
      {/* Cut info */}
      <text x={bodiceWidth/2} y={bodiceHeight + 12} textAnchor="middle" fontSize="5" fill="hsl(var(--muted-foreground))">Cut 1 on fold</text>
    </g>
  );

  const renderBackBodice = () => (
    <g transform="translate(100, 20)">
      <text x={bodiceWidth/2} y="-5" textAnchor="middle" fontSize="7" fill="hsl(var(--foreground))" fontWeight="500">BACK BODICE</text>
      
      {/* Back bodice - typically higher neckline */}
      <path 
        d={`M0 5 Q${bodiceWidth/2} 12 ${bodiceWidth} 5
            L${bodiceWidth + 8} ${bodiceHeight}
            L-8 ${bodiceHeight}
            Z`}
        fill={getFillStyle('pattern-back-bodice')}
        stroke="hsl(var(--sketch-line))"
        strokeWidth="1"
      />
      
      {/* Center back line for zipper */}
      {(present.backClosure === 'zipper-center' || present.backClosure === 'buttons' || present.backClosure === 'lace-up') && (
        <line x1={bodiceWidth/2} y1="8" x2={bodiceWidth/2} y2={bodiceHeight} 
          stroke="hsl(var(--sketch-line))" strokeWidth="1" strokeDasharray="4 2" />
      )}

      {/* Back darts */}
      <path d={`M${bodiceWidth*0.25} ${bodiceHeight} L${bodiceWidth*0.3} ${bodiceHeight*0.6} L${bodiceWidth*0.35} ${bodiceHeight}`} 
        fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d={`M${bodiceWidth*0.65} ${bodiceHeight} L${bodiceWidth*0.7} ${bodiceHeight*0.6} L${bodiceWidth*0.75} ${bodiceHeight}`} 
        fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />

      {/* Grain line */}
      <line x1={bodiceWidth/2} y1="18" x2={bodiceWidth/2} y2={bodiceHeight - 5} stroke="hsl(var(--sketch-line))" strokeWidth="0.5" />
      <polygon points={`${bodiceWidth/2},18 ${bodiceWidth/2 - 3},25 ${bodiceWidth/2 + 3},25`} fill="hsl(var(--sketch-line))" />
      
      {/* Cut info */}
      <text x={bodiceWidth/2} y={bodiceHeight + 12} textAnchor="middle" fontSize="5" fill="hsl(var(--muted-foreground))">
        {present.backClosure === 'zipper-center' || present.backClosure === 'buttons' ? 'Cut 2' : 'Cut 1 on fold'}
      </text>
    </g>
  );

  const renderFrontSkirt = () => (
    <g transform={`translate(20, ${bodiceHeight + 45})`}>
      <text x={skirtBottomWidth/2} y="-5" textAnchor="middle" fontSize="7" fill="hsl(var(--foreground))" fontWeight="500">FRONT SKIRT</text>
      
      {/* Skirt panel shape */}
      <path 
        d={`M${(skirtBottomWidth - bodiceWidth)/2} 0
            L0 ${skirtHeight}
            L${skirtBottomWidth} ${skirtHeight}
            L${skirtBottomWidth - (skirtBottomWidth - bodiceWidth)/2} 0
            Z`}
        fill={getFillStyle('pattern-front-skirt')}
        stroke="hsl(var(--sketch-line))"
        strokeWidth="1"
      />
      
      {/* Waist gathering/pleats for fuller silhouettes */}
      {(present.silhouette === 'ballgown' || present.silhouette === 'flared') && (
        <path d={`M${(skirtBottomWidth - bodiceWidth)/2 + 5} 0 L${(skirtBottomWidth - bodiceWidth)/2 + 5} 8`} 
          fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 1" />
      )}

      {/* Grain line */}
      <line x1={skirtBottomWidth/2} y1="10" x2={skirtBottomWidth/2} y2={skirtHeight - 10} stroke="hsl(var(--sketch-line))" strokeWidth="0.5" />
      <polygon points={`${skirtBottomWidth/2},10 ${skirtBottomWidth/2 - 3},18 ${skirtBottomWidth/2 + 3},18`} fill="hsl(var(--sketch-line))" />
      
      {/* Cut info */}
      <text x={skirtBottomWidth/2} y={skirtHeight + 12} textAnchor="middle" fontSize="5" fill="hsl(var(--muted-foreground))">Cut 1 on fold</text>
    </g>
  );

  const renderBackSkirt = () => (
    <g transform={`translate(${skirtBottomWidth + 40}, ${bodiceHeight + 45})`}>
      <text x={skirtBottomWidth/2} y="-5" textAnchor="middle" fontSize="7" fill="hsl(var(--foreground))" fontWeight="500">BACK SKIRT</text>
      
      {/* Skirt panel shape */}
      <path 
        d={`M${(skirtBottomWidth - bodiceWidth)/2} 0
            L0 ${skirtHeight}
            L${skirtBottomWidth} ${skirtHeight}
            L${skirtBottomWidth - (skirtBottomWidth - bodiceWidth)/2} 0
            Z`}
        fill={getFillStyle('pattern-back-skirt')}
        stroke="hsl(var(--sketch-line))"
        strokeWidth="1"
      />
      
      {/* Center back seam for zipper */}
      {present.backClosure === 'zipper-center' && (
        <line x1={skirtBottomWidth/2} y1="0" x2={skirtBottomWidth/2} y2={skirtHeight * 0.5} 
          stroke="hsl(var(--sketch-line))" strokeWidth="1" strokeDasharray="4 2" />
      )}

      {/* Grain line */}
      <line x1={skirtBottomWidth/2} y1="10" x2={skirtBottomWidth/2} y2={skirtHeight - 10} stroke="hsl(var(--sketch-line))" strokeWidth="0.5" />
      <polygon points={`${skirtBottomWidth/2},10 ${skirtBottomWidth/2 - 3},18 ${skirtBottomWidth/2 + 3},18`} fill="hsl(var(--sketch-line))" />
      
      {/* Cut info */}
      <text x={skirtBottomWidth/2} y={skirtHeight + 12} textAnchor="middle" fontSize="5" fill="hsl(var(--muted-foreground))">
        {present.backClosure === 'zipper-center' ? 'Cut 2' : 'Cut 1 on fold'}
      </text>
    </g>
  );

  const renderSleeve = () => {
    if (present.sleeve === 'sleeveless') return null;
    
    const sleeveLength = present.sleeve === 'cap' ? 25 : 
                         present.sleeve === 'short' ? 40 :
                         present.sleeve === 'elbow' ? 55 :
                         present.sleeve === 'three-quarter' ? 70 :
                         present.sleeve === 'long' ? 90 :
                         present.sleeve === 'bell' ? 85 : 40;

    const sleeveTopWidth = 45;
    const sleeveBottomWidth = present.sleeve === 'bell' ? 65 : 
                              present.sleeve === 'puff' ? 50 : 40;

    return (
      <g transform="translate(180, 20)">
        <text x={sleeveTopWidth/2} y="-5" textAnchor="middle" fontSize="7" fill="hsl(var(--foreground))" fontWeight="500">SLEEVE</text>
        
        {/* Sleeve cap curve */}
        <path 
          d={`M0 15
              Q${sleeveTopWidth*0.25} 0 ${sleeveTopWidth/2} 5
              Q${sleeveTopWidth*0.75} 0 ${sleeveTopWidth} 15
              L${sleeveTopWidth + (sleeveBottomWidth - sleeveTopWidth)/2} ${sleeveLength}
              L${-(sleeveBottomWidth - sleeveTopWidth)/2} ${sleeveLength}
              Z`}
          fill={getFillStyle('pattern-sleeve')}
          stroke="hsl(var(--sketch-line))"
          strokeWidth="1"
        />
        
        {/* Ease notches */}
        <circle cx={sleeveTopWidth * 0.25} cy="6" r="2" fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" />
        <circle cx={sleeveTopWidth * 0.75} cy="6" r="2" fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" />
        
        {/* Grain line */}
        <line x1={sleeveTopWidth/2} y1="20" x2={sleeveTopWidth/2} y2={sleeveLength - 8} stroke="hsl(var(--sketch-line))" strokeWidth="0.5" />
        <polygon points={`${sleeveTopWidth/2},20 ${sleeveTopWidth/2 - 3},27 ${sleeveTopWidth/2 + 3},27`} fill="hsl(var(--sketch-line))" />
        
        {/* Cut info */}
        <text x={sleeveTopWidth/2} y={sleeveLength + 12} textAnchor="middle" fontSize="5" fill="hsl(var(--muted-foreground))">Cut 2</text>
      </g>
    );
  };

  const renderFacing = () => (
    <g transform="translate(250, 20)">
      <text x="30" y="-5" textAnchor="middle" fontSize="7" fill="hsl(var(--foreground))" fontWeight="500">FRONT FACING</text>
      
      {/* Facing shape follows neckline */}
      <path 
        d={`M0 ${present.neckline === 'v-neck' ? 15 : 8}
            ${present.neckline === 'v-neck' ? 'L30 25 L60 15' : 
              present.neckline === 'scoop' ? 'Q30 22 60 12' :
              'Q30 15 60 8'}
            L60 ${25 + (present.neckline === 'v-neck' ? 10 : 0)}
            ${present.neckline === 'v-neck' ? 'L30 35 L0 25' : 'Q30 25 0 18'}
            Z`}
        fill={getFillStyle('pattern-facing')}
        stroke="hsl(var(--sketch-line))"
        strokeWidth="1"
      />
      
      <text x="30" y="45" textAnchor="middle" fontSize="5" fill="hsl(var(--muted-foreground))">Cut 1 on fold + interfacing</text>
    </g>
  );

  const renderWaistband = () => {
    if (present.silhouette === 'shift' || present.silhouette === 'tent') return null;
    
    return (
      <g transform="translate(250, 80)">
        <text x="35" y="-5" textAnchor="middle" fontSize="7" fill="hsl(var(--foreground))" fontWeight="500">WAISTBAND</text>
        
        <rect 
          x="0" y="0" 
          width="70" height="15"
          fill={getFillStyle('pattern-waistband')}
          stroke="hsl(var(--sketch-line))"
          strokeWidth="1"
        />
        
        {/* Fold line */}
        <line x1="0" y1="7.5" x2="70" y2="7.5" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="4 2" />
        
        <text x="35" y="27" textAnchor="middle" fontSize="5" fill="hsl(var(--muted-foreground))">Cut 1 + interfacing</text>
      </g>
    );
  };

  const renderRuffle = () => {
    if (present.ruffle === 'no-ruffle') return null;

    const ruffleHeight = present.ruffle === 'double' ? 20 : 
                         present.ruffle === 'cascade' ? 25 : 12;
    const ruffleWidth = skirtBottomWidth * 1.5; // Gathered, so wider

    return (
      <g transform="translate(250, 120)">
        <text x={ruffleWidth/2} y="-5" textAnchor="middle" fontSize="7" fill="hsl(var(--foreground))" fontWeight="500">RUFFLE</text>
        
        <rect 
          x="0" y="0" 
          width={ruffleWidth} height={ruffleHeight}
          fill={getFillStyle('pattern-ruffle')}
          stroke="hsl(var(--sketch-line))"
          strokeWidth="1"
        />
        
        {/* Gathering line */}
        <line x1="0" y1="4" x2={ruffleWidth} y2="4" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />
        
        {present.ruffle === 'double' && (
          <line x1="0" y1="10" x2={ruffleWidth} y2="10" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />
        )}
        
        <text x={ruffleWidth/2} y={ruffleHeight + 12} textAnchor="middle" fontSize="5" fill="hsl(var(--muted-foreground))">
          {present.ruffle.toUpperCase()} - Cut 1
        </text>
      </g>
    );
  };

  const renderPocket = () => {
    if (present.pocket === 'no-pocket' || present.pocket === 'side-seam') return null;

    return (
      <g transform={`translate(250, ${present.ruffle === 'no-ruffle' ? 120 : 180})`}>
        <text x="20" y="-5" textAnchor="middle" fontSize="7" fill="hsl(var(--foreground))" fontWeight="500">POCKET</text>
        
        {present.pocket === 'patch' && (
          <path 
            d="M0 0 L40 0 L40 45 Q20 50 0 45 Z"
            fill={getFillStyle('pattern-pocket')}
            stroke="hsl(var(--sketch-line))"
            strokeWidth="1"
          />
        )}
        {present.pocket === 'welt' && (
          <>
            <rect x="0" y="0" width="45" height="30" fill={getFillStyle('pattern-pocket')} stroke="hsl(var(--sketch-line))" strokeWidth="1" />
            <rect x="0" y="30" width="45" height="10" fill={getFillStyle('pattern-pocket')} stroke="hsl(var(--sketch-line))" strokeWidth="1" />
          </>
        )}
        {present.pocket === 'kangaroo' && (
          <path 
            d="M0 25 Q25 0 50 25 L50 50 L0 50 Z"
            fill={getFillStyle('pattern-pocket')}
            stroke="hsl(var(--sketch-line))"
            strokeWidth="1"
          />
        )}
        
        <text x="20" y="60" textAnchor="middle" fontSize="5" fill="hsl(var(--muted-foreground))">Cut 2</text>
      </g>
    );
  };

  return (
    <div className="panel-section flex-1 flex flex-col">
      <div className="px-4 py-3 border-b border-panel-border">
        <h3 className="text-sm font-semibold text-foreground">FLAT PATTERN</h3>
        <p className="text-xs text-muted-foreground mt-1">Scale 1:10</p>
      </div>
      
      <div className="flex-1 p-4 overflow-auto bg-muted/20">
        <div className="bg-card rounded-lg p-4 min-h-[400px]">
          <svg 
            width="100%" 
            height={totalHeight}
            viewBox={`0 0 ${totalWidth} ${totalHeight}`}
            className="transition-all duration-300"
          >
            {/* Definitions for patterns */}
            <defs>
              {renderFabricPattern('pattern-front-bodice')}
              {renderFabricPattern('pattern-back-bodice')}
              {renderFabricPattern('pattern-front-skirt')}
              {renderFabricPattern('pattern-back-skirt')}
              {renderFabricPattern('pattern-sleeve')}
              {renderFabricPattern('pattern-facing')}
              {renderFabricPattern('pattern-waistband')}
              {renderFabricPattern('pattern-ruffle')}
              {renderFabricPattern('pattern-pocket')}
              
              {/* Grid pattern */}
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--border))" strokeWidth="0.3" />
              </pattern>
            </defs>
            
            {/* Grid background */}
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* All pattern pieces */}
            {renderFrontBodice()}
            {renderBackBodice()}
            {renderFrontSkirt()}
            {renderBackSkirt()}
            {renderSleeve()}
            {renderFacing()}
            {renderWaistband()}
            {renderRuffle()}
            {renderPocket()}

            {/* Scale indicator */}
            <g transform={`translate(20, ${totalHeight - 25})`}>
              <line x1="0" y1="0" x2="100" y2="0" stroke="hsl(var(--foreground))" strokeWidth="1" />
              <line x1="0" y1="-4" x2="0" y2="4" stroke="hsl(var(--foreground))" strokeWidth="1" />
              <line x1="100" y1="-4" x2="100" y2="4" stroke="hsl(var(--foreground))" strokeWidth="1" />
              <text x="50" y="14" textAnchor="middle" fontSize="7" fill="hsl(var(--muted-foreground))">10cm (Scale 1:10)</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}