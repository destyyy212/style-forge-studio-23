export type DesignCategory = 
  | 'silhouettes'
  | 'necklines'
  | 'backClosures'
  | 'sleeves'
  | 'ruffles'
  | 'pockets'
  | 'color'
  | 'fabric';

export type LengthOption = 
  | 'micro-mini'
  | 'mini'
  | 'above-knee'
  | 'knee-length'
  | 'below-knee'
  | 'midi'
  | 'tea-length'
  | 'ankle-length'
  | 'full-length';

export type ViewOption = 'both' | 'front' | 'back';

export interface DesignOption {
  id: string;
  name: string;
  category: DesignCategory;
  icon?: string;
}

export interface ColorOption {
  id: string;
  name: string;
  hex: string;
}

export interface FabricOption {
  id: string;
  name: string;
  pattern: string;
  colors: string[];
}

export interface DesignState {
  silhouette: string;
  neckline: string;
  backClosure: string;
  sleeve: string;
  ruffle: string;
  pocket: string;
  color: string;
  fabric: string;
  length: LengthOption;
  view: ViewOption;
}

export interface HistoryState {
  past: DesignState[];
  present: DesignState;
  future: DesignState[];
}
