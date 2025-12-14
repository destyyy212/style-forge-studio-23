import { create } from 'zustand';
import { DesignState, HistoryState, LengthOption, ViewOption } from '@/types/design';

const initialDesign: DesignState = {
  silhouette: 'straight-bust',
  neckline: 'round',
  backClosure: 'zipper-center',
  sleeve: 'sleeveless',
  ruffle: 'no-ruffle',
  pocket: 'no-pocket',
  color: 'black',
  fabric: 'solid',
  length: 'above-knee',
  view: 'both',
};

interface DesignStore extends HistoryState {
  setDesign: (key: keyof DesignState, value: string) => void;
  setLength: (length: LengthOption) => void;
  setView: (view: ViewOption) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const useDesignStore = create<DesignStore>((set, get) => ({
  past: [],
  present: initialDesign,
  future: [],
  canUndo: false,
  canRedo: false,

  setDesign: (key, value) => {
    const { past, present } = get();
    const newPresent = { ...present, [key]: value };
    set({
      past: [...past, present],
      present: newPresent,
      future: [],
      canUndo: true,
      canRedo: false,
    });
  },

  setLength: (length) => {
    const { past, present } = get();
    const newPresent = { ...present, length };
    set({
      past: [...past, present],
      present: newPresent,
      future: [],
      canUndo: true,
      canRedo: false,
    });
  },

  setView: (view) => {
    set((state) => ({
      present: { ...state.present, view },
    }));
  },

  undo: () => {
    const { past, present, future } = get();
    if (past.length === 0) return;
    
    const previous = past[past.length - 1];
    const newPast = past.slice(0, -1);
    
    set({
      past: newPast,
      present: previous,
      future: [present, ...future],
      canUndo: newPast.length > 0,
      canRedo: true,
    });
  },

  redo: () => {
    const { past, present, future } = get();
    if (future.length === 0) return;
    
    const next = future[0];
    const newFuture = future.slice(1);
    
    set({
      past: [...past, present],
      present: next,
      future: newFuture,
      canUndo: true,
      canRedo: newFuture.length > 0,
    });
  },
}));
