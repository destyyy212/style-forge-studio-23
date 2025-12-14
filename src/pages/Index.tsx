import { useState } from 'react';
import { DesignCategory } from '@/types/design';
import { DesignNavbar } from '@/components/DesignNavbar';
import { DesignSidebar } from '@/components/DesignSidebar';
import { OptionsPanel } from '@/components/OptionsPanel';
import { TechnicalSketch } from '@/components/TechnicalSketch';
import { FlatPattern } from '@/components/FlatPattern';
import { NextButton } from '@/components/NextButton';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<DesignCategory>('silhouettes');
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const handleCategoryChange = (category: DesignCategory) => {
    setActiveCategory(category);
    setIsPanelOpen(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DesignNavbar />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <DesignSidebar 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />

        {/* Options Panel */}
        {isPanelOpen && (
          <OptionsPanel 
            category={activeCategory} 
            onClose={() => setIsPanelOpen(false)} 
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 flex gap-4 p-4 overflow-hidden bg-muted/30">
          {/* Technical Sketch */}
          <div className="flex-1 min-w-0">
            <TechnicalSketch />
          </div>

          {/* Flat Pattern */}
          <div className="flex-1 min-w-0">
            <FlatPattern />
          </div>
        </main>
      </div>

      {/* Next Button */}
      <NextButton />
    </div>
  );
};

export default Index;
