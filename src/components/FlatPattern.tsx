import { useDesignStore } from '@/store/designStore';
import { lengthOptions } from '@/data/designOptions';

export function FlatPattern() {
  const { present } = useDesignStore();

  const getPatternHeight = () => {
    const lengthData = lengthOptions.find(l => l.id === present.length);
    return lengthData?.height || 120;
  };

  const height = getPatternHeight();
  const viewBoxHeight = Math.max(height + 80, 200);

  // Generate pattern pieces based on design selections
  const renderFrontBodice = () => (
    <g transform="translate(10, 10)">
      {/* Front bodice piece */}
      <path 
        d={`M0 0 
            L60 0 
            L60 ${height * 0.4} 
            ${present.silhouette === 'a-line' ? `L70 ${height * 0.8}` : `L60 ${height * 0.8}`}
            L0 ${height * 0.8}
            ${present.silhouette === 'a-line' ? `L-10 ${height * 0.4}` : ''}
            Z`}
        fill="none"
        stroke="hsl(var(--sketch-line))"
        strokeWidth="1"
      />
      
      {/* Neckline curve */}
      {present.neckline === 'round' && (
        <path d="M0 0 Q30 15 60 0" fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="1" />
      )}
      {present.neckline === 'v-neck' && (
        <path d="M0 0 L30 25 L60 0" fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="1" />
      )}
      {present.neckline === 'scoop' && (
        <path d="M0 0 Q30 25 60 0" fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="1" />
      )}
      {present.neckline === 'square' && (
        <path d="M10 0 L10 15 L50 15 L50 0" fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="1" />
      )}
      {present.neckline === 'sweetheart' && (
        <path d="M0 5 Q15 0 30 15 Q45 0 60 5" fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="1" />
      )}

      {/* Dart lines */}
      <path d={`M20 ${height * 0.3} L25 ${height * 0.15} L30 ${height * 0.3}`} fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d={`M35 ${height * 0.3} L40 ${height * 0.15} L45 ${height * 0.3}`} fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />

      {/* Grain line */}
      <line x1="30" y1="20" x2="30" y2={height * 0.7} stroke="hsl(var(--sketch-line))" strokeWidth="0.5" />
      <polygon points="30,20 27,28 33,28" fill="hsl(var(--sketch-line))" />
      <polygon points="30,{height * 0.7} 27,{height * 0.7 - 8} 33,{height * 0.7 - 8}" fill="hsl(var(--sketch-line))" />

      {/* Label */}
      <text x="30" y={height * 0.85} textAnchor="middle" fontSize="6" fill="hsl(var(--muted-foreground))">FRONT</text>
    </g>
  );

  const renderBackBodice = () => (
    <g transform="translate(90, 10)">
      {/* Back bodice piece */}
      <path 
        d={`M0 0 
            L60 0 
            L60 ${height * 0.4} 
            ${present.silhouette === 'a-line' ? `L70 ${height * 0.8}` : `L60 ${height * 0.8}`}
            L0 ${height * 0.8}
            ${present.silhouette === 'a-line' ? `L-10 ${height * 0.4}` : ''}
            Z`}
        fill="none"
        stroke="hsl(var(--sketch-line))"
        strokeWidth="1"
      />
      
      {/* Back neckline - typically higher */}
      <path d="M5 0 Q30 8 55 0" fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="1" />

      {/* Center back line for zipper */}
      {present.backClosure === 'zipper-center' && (
        <line x1="30" y1="0" x2="30" y2={height * 0.6} stroke="hsl(var(--sketch-line))" strokeWidth="1" strokeDasharray="4 2" />
      )}

      {/* Back darts */}
      <path d={`M15 ${height * 0.25} L18 ${height * 0.1} L21 ${height * 0.25}`} fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />
      <path d={`M39 ${height * 0.25} L42 ${height * 0.1} L45 ${height * 0.25}`} fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />

      {/* Grain line */}
      <line x1="30" y1="20" x2="30" y2={height * 0.7} stroke="hsl(var(--sketch-line))" strokeWidth="0.5" />
      <polygon points="30,20 27,28 33,28" fill="hsl(var(--sketch-line))" />

      {/* Label */}
      <text x="30" y={height * 0.85} textAnchor="middle" fontSize="6" fill="hsl(var(--muted-foreground))">BACK</text>
    </g>
  );

  const renderSleeve = () => {
    if (present.sleeve === 'sleeveless') return null;
    
    const sleeveLength = present.sleeve === 'cap' ? 20 : 
                         present.sleeve === 'short' ? 35 :
                         present.sleeve === 'elbow' ? 50 :
                         present.sleeve === 'three-quarter' ? 65 :
                         present.sleeve === 'long' ? 85 :
                         present.sleeve === 'bell' ? 80 : 35;

    const sleeveWidth = present.sleeve === 'bell' ? 50 : 
                        present.sleeve === 'puff' ? 45 : 35;

    return (
      <g transform={`translate(170, 10)`}>
        {/* Sleeve piece */}
        <path 
          d={`M0 0 
              Q${sleeveWidth/2} -8 ${sleeveWidth} 0
              L${sleeveWidth + (present.sleeve === 'bell' ? 15 : 0)} ${sleeveLength}
              L${present.sleeve === 'bell' ? -15 : 0} ${sleeveLength}
              Z`}
          fill="none"
          stroke="hsl(var(--sketch-line))"
          strokeWidth="1"
        />
        
        {/* Grain line */}
        <line x1={sleeveWidth/2} y1="10" x2={sleeveWidth/2} y2={sleeveLength - 10} stroke="hsl(var(--sketch-line))" strokeWidth="0.5" />
        <polygon points={`${sleeveWidth/2},10 ${sleeveWidth/2 - 3},18 ${sleeveWidth/2 + 3},18`} fill="hsl(var(--sketch-line))" />

        {/* Label */}
        <text x={sleeveWidth/2} y={sleeveLength + 12} textAnchor="middle" fontSize="6" fill="hsl(var(--muted-foreground))">SLEEVE</text>
        <text x={sleeveWidth/2} y={sleeveLength + 20} textAnchor="middle" fontSize="5" fill="hsl(var(--muted-foreground))">(Cut 2)</text>
      </g>
    );
  };

  const renderRuffle = () => {
    if (present.ruffle === 'no-ruffle') return null;

    const ruffleHeight = present.ruffle === 'double' ? 25 : 
                         present.ruffle === 'cascade' ? 30 : 15;

    return (
      <g transform={`translate(10, ${height * 0.8 + 30})`}>
        {/* Ruffle piece - gathered rectangle */}
        <rect 
          x="0" 
          y="0" 
          width="140" 
          height={ruffleHeight}
          fill="none"
          stroke="hsl(var(--sketch-line))"
          strokeWidth="1"
        />
        
        {/* Gathering marks */}
        <line x1="0" y1="5" x2="140" y2="5" stroke="hsl(var(--sketch-line))" strokeWidth="0.5" strokeDasharray="2 2" />
        
        {/* Label */}
        <text x="70" y={ruffleHeight + 10} textAnchor="middle" fontSize="6" fill="hsl(var(--muted-foreground))">RUFFLE - {present.ruffle.toUpperCase()}</text>
      </g>
    );
  };

  const renderPocket = () => {
    if (present.pocket === 'no-pocket' || present.pocket === 'side-seam') return null;

    return (
      <g transform={`translate(170, ${height * 0.5})`}>
        {/* Pocket piece */}
        {present.pocket === 'patch' && (
          <rect x="0" y="0" width="30" height="35" rx="2" fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="1" />
        )}
        {present.pocket === 'welt' && (
          <>
            <rect x="0" y="0" width="35" height="25" fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="1" />
            <rect x="0" y="25" width="35" height="8" fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="1" />
          </>
        )}
        {present.pocket === 'kangaroo' && (
          <path d="M0 20 Q20 0 40 20 L40 40 L0 40 Z" fill="none" stroke="hsl(var(--sketch-line))" strokeWidth="1" />
        )}
        
        {/* Label */}
        <text x="17" y="50" textAnchor="middle" fontSize="6" fill="hsl(var(--muted-foreground))">POCKET</text>
        <text x="17" y="58" textAnchor="middle" fontSize="5" fill="hsl(var(--muted-foreground))">(Cut 2)</text>
      </g>
    );
  };

  return (
    <div className="panel-section flex-1 flex flex-col">
      <div className="px-4 py-3 border-b border-panel-border">
        <h3 className="text-sm font-semibold text-foreground">FLAT PATTERN</h3>
      </div>
      
      <div className="flex-1 p-4 overflow-auto bg-muted/20">
        <div className="bg-card rounded-lg p-4 min-h-[300px]">
          <svg 
            width="100%" 
            height={viewBoxHeight + 60}
            viewBox={`0 0 240 ${viewBoxHeight + 60}`}
            className="transition-all duration-300"
          >
            {/* Grid background */}
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="hsl(var(--border))" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Pattern pieces */}
            {renderFrontBodice()}
            {renderBackBodice()}
            {renderSleeve()}
            {renderRuffle()}
            {renderPocket()}

            {/* Scale indicator */}
            <g transform={`translate(10, ${viewBoxHeight + 40})`}>
              <line x1="0" y1="0" x2="50" y2="0" stroke="hsl(var(--foreground))" strokeWidth="1" />
              <line x1="0" y1="-3" x2="0" y2="3" stroke="hsl(var(--foreground))" strokeWidth="1" />
              <line x1="50" y1="-3" x2="50" y2="3" stroke="hsl(var(--foreground))" strokeWidth="1" />
              <text x="25" y="12" textAnchor="middle" fontSize="6" fill="hsl(var(--muted-foreground))">Scale 1:10</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
