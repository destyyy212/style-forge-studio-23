import { useDesignStore } from '@/store/designStore';
import { Undo2, Redo2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function DesignNavbar() {
  const { undo, redo, canUndo, canRedo, present } = useDesignStore();

  const handleDownload = () => {
    // Create design data object
    const designData = {
      ...present,
      exportedAt: new Date().toISOString(),
      version: '1.0',
    };

    // Create downloadable JSON
    const dataStr = JSON.stringify(designData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    // Create download link
    const link = document.createElement('a');
    link.href = url;
    link.download = `dress-design-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success('Design downloaded successfully!');
  };

  const handleUndo = () => {
    if (canUndo) {
      undo();
      toast('Undone', { duration: 1500 });
    }
  };

  const handleRedo = () => {
    if (canRedo) {
      redo();
      toast('Redone', { duration: 1500 });
    }
  };

  return (
    <header className="h-14 bg-card border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold text-primary">StyleCraft</h1>
        <span className="text-xs text-muted-foreground">Custom Design Studio</span>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleUndo}
          disabled={!canUndo}
          className="gap-2 text-muted-foreground hover:text-foreground disabled:opacity-40"
        >
          <Undo2 className="h-4 w-4" />
          <span className="hidden sm:inline">Undo</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleRedo}
          disabled={!canRedo}
          className="gap-2 text-muted-foreground hover:text-foreground disabled:opacity-40"
        >
          <Redo2 className="h-4 w-4" />
          <span className="hidden sm:inline">Redo</span>
        </Button>

        <div className="w-px h-6 bg-border mx-2" />

        <Button
          variant="outline"
          size="sm"
          onClick={handleDownload}
          className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Download Design</span>
        </Button>
      </div>
    </header>
  );
}
