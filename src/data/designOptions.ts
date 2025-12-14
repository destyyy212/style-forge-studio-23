import { ColorOption, FabricOption } from '@/types/design';

export const silhouetteOptions = [
  { id: 'straight-bust', name: 'Straight Bust', description: 'Classic straight silhouette' },
  { id: 'a-line', name: 'A-Line', description: 'Flared from waist' },
  { id: 'fitted', name: 'Fitted', description: 'Body-hugging fit' },
  { id: 'empire', name: 'Empire', description: 'High waist cut' },
  { id: 'sheath', name: 'Sheath', description: 'Narrow throughout' },
  { id: 'flared', name: 'Flared', description: 'Wide bottom flare' },
];

export const necklineOptions = [
  { id: 'round', name: 'Round Neck', description: 'Classic round cut' },
  { id: 'v-neck', name: 'V-Neck', description: 'V-shaped neckline' },
  { id: 'scoop', name: 'Scoop Neck', description: 'Wide curved cut' },
  { id: 'boat', name: 'Boat Neck', description: 'Wide horizontal cut' },
  { id: 'sweetheart', name: 'Sweetheart', description: 'Heart-shaped cut' },
  { id: 'halter', name: 'Halter', description: 'Ties behind neck' },
  { id: 'square', name: 'Square Neck', description: 'Straight edge cut' },
  { id: 'cowl', name: 'Cowl Neck', description: 'Draped fabric fold' },
];

export const backClosureOptions = [
  { id: 'zipper-center', name: 'Center Zipper', description: 'Back center zip' },
  { id: 'zipper-side', name: 'Side Zipper', description: 'Hidden side zip' },
  { id: 'buttons', name: 'Button Back', description: 'Button closure' },
  { id: 'open-back', name: 'Open Back', description: 'Exposed back' },
  { id: 'keyhole', name: 'Keyhole Back', description: 'Small opening' },
  { id: 'lace-up', name: 'Lace Up', description: 'Corset style' },
];

export const sleeveOptions = [
  { id: 'sleeveless', name: 'Sleeveless', description: 'No sleeves' },
  { id: 'cap', name: 'Cap Sleeve', description: 'Short cap style' },
  { id: 'short', name: 'Short Sleeve', description: 'Above elbow' },
  { id: 'elbow', name: 'Elbow Length', description: 'To elbow' },
  { id: 'three-quarter', name: '3/4 Sleeve', description: 'Below elbow' },
  { id: 'long', name: 'Long Sleeve', description: 'Full length' },
  { id: 'bell', name: 'Bell Sleeve', description: 'Flared ends' },
  { id: 'puff', name: 'Puff Sleeve', description: 'Volume at top' },
];

export const ruffleOptions = [
  { id: 'no-ruffle', name: 'No Ruffle', description: 'Clean finish' },
  { id: 'single', name: 'Single Ruffle', description: 'One layer' },
  { id: 'double', name: 'Double Ruffle', description: 'Two layers' },
  { id: 'flounce', name: 'Flounce', description: 'Circular ruffle' },
  { id: 'cascade', name: 'Cascade', description: 'Flowing layers' },
];

export const pocketOptions = [
  { id: 'no-pocket', name: 'No Pocket', description: 'Seamless look' },
  { id: 'side-seam', name: 'Side Seam', description: 'Hidden in seam' },
  { id: 'patch', name: 'Patch Pocket', description: 'Sewn on top' },
  { id: 'welt', name: 'Welt Pocket', description: 'Slit pocket' },
  { id: 'kangaroo', name: 'Kangaroo', description: 'Front pouch' },
];

export const colorOptions: ColorOption[] = [
  { id: 'black', name: 'Black', hex: '#1a1a1a' },
  { id: 'white', name: 'White', hex: '#ffffff' },
  { id: 'ivory', name: 'Ivory', hex: '#fffff0' },
  { id: 'cream', name: 'Cream', hex: '#fffdd0' },
  { id: 'navy', name: 'Navy', hex: '#1e3a5f' },
  { id: 'royal-blue', name: 'Royal Blue', hex: '#4169e1' },
  { id: 'sky-blue', name: 'Sky Blue', hex: '#87ceeb' },
  { id: 'teal', name: 'Teal', hex: '#008080' },
  { id: 'emerald', name: 'Emerald', hex: '#50c878' },
  { id: 'forest', name: 'Forest', hex: '#228b22' },
  { id: 'olive', name: 'Olive', hex: '#808000' },
  { id: 'sage', name: 'Sage', hex: '#9dc183' },
  { id: 'burgundy', name: 'Burgundy', hex: '#800020' },
  { id: 'wine', name: 'Wine', hex: '#722f37' },
  { id: 'coral', name: 'Coral', hex: '#ff7f50' },
  { id: 'blush', name: 'Blush', hex: '#de5d83' },
  { id: 'rose', name: 'Rose', hex: '#ff007f' },
  { id: 'dusty-rose', name: 'Dusty Rose', hex: '#dcae96' },
  { id: 'mauve', name: 'Mauve', hex: '#e0b0ff' },
  { id: 'lavender', name: 'Lavender', hex: '#e6e6fa' },
  { id: 'plum', name: 'Plum', hex: '#8e4585' },
  { id: 'mustard', name: 'Mustard', hex: '#ffdb58' },
  { id: 'gold', name: 'Gold', hex: '#ffd700' },
  { id: 'champagne', name: 'Champagne', hex: '#f7e7ce' },
  { id: 'taupe', name: 'Taupe', hex: '#483c32' },
  { id: 'charcoal', name: 'Charcoal', hex: '#36454f' },
  { id: 'silver', name: 'Silver', hex: '#c0c0c0' },
  { id: 'gray', name: 'Gray', hex: '#808080' },
  { id: 'red', name: 'Red', hex: '#dc2626' },
  { id: 'orange', name: 'Orange', hex: '#f97316' },
];

export const fabricOptions: FabricOption[] = [
  { id: 'solid', name: 'Solid', pattern: 'solid', colors: ['currentColor'] },
  { id: 'floral-1', name: 'Rose Garden', pattern: 'floral', colors: ['#ff6b6b', '#4ecdc4', '#45b7d1'] },
  { id: 'floral-2', name: 'Wildflower', pattern: 'floral', colors: ['#f8b500', '#ff6f61', '#6b5b95'] },
  { id: 'floral-3', name: 'Cherry Blossom', pattern: 'floral', colors: ['#ffb7c5', '#ff69b4', '#228b22'] },
  { id: 'stripe-1', name: 'Classic Stripe', pattern: 'stripe', colors: ['#1a1a1a', '#ffffff'] },
  { id: 'stripe-2', name: 'Candy Stripe', pattern: 'stripe', colors: ['#ff6b6b', '#ffffff'] },
  { id: 'stripe-3', name: 'Navy Stripe', pattern: 'stripe', colors: ['#1e3a5f', '#ffffff'] },
  { id: 'polka-1', name: 'Classic Dots', pattern: 'polka', colors: ['#1a1a1a', '#ffffff'] },
  { id: 'polka-2', name: 'Retro Dots', pattern: 'polka', colors: ['#ff6b6b', '#ffffff'] },
  { id: 'check-1', name: 'Gingham', pattern: 'check', colors: ['#ff6b6b', '#ffffff'] },
  { id: 'check-2', name: 'Buffalo Check', pattern: 'check', colors: ['#1a1a1a', '#dc2626'] },
  { id: 'plaid-1', name: 'Tartan', pattern: 'plaid', colors: ['#1e3a5f', '#dc2626', '#228b22'] },
  { id: 'geometric-1', name: 'Modern Geo', pattern: 'geometric', colors: ['#1a1a1a', '#f97316', '#ffffff'] },
  { id: 'abstract-1', name: 'Watercolor', pattern: 'abstract', colors: ['#87ceeb', '#ff6b6b', '#ffd700'] },
  { id: 'leopard', name: 'Leopard', pattern: 'animal', colors: ['#d4a574', '#1a1a1a', '#8b4513'] },
  { id: 'zebra', name: 'Zebra', pattern: 'animal', colors: ['#1a1a1a', '#ffffff'] },
  { id: 'lace-1', name: 'Delicate Lace', pattern: 'lace', colors: ['#ffffff', '#fffaf0'] },
  { id: 'velvet', name: 'Velvet', pattern: 'velvet', colors: ['#800020'] },
  { id: 'satin', name: 'Satin', pattern: 'satin', colors: ['#ffd700'] },
  { id: 'denim', name: 'Denim', pattern: 'denim', colors: ['#1e3a5f', '#4169e1'] },
];

export const lengthOptions = [
  { id: 'micro-mini', name: 'Micro Mini', height: 60 },
  { id: 'mini', name: 'Mini', height: 80 },
  { id: 'above-knee', name: 'Above Knee', height: 100 },
  { id: 'knee-length', name: 'Knee Length', height: 120 },
  { id: 'below-knee', name: 'Below Knee', height: 140 },
  { id: 'midi', name: 'Midi', height: 160 },
  { id: 'tea-length', name: 'Tea Length', height: 180 },
  { id: 'ankle-length', name: 'Ankle Length', height: 200 },
  { id: 'full-length', name: 'Full Length', height: 220 },
];
