import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface NextButtonProps {
  onClick?: () => void;
}

export function NextButton({ onClick }: NextButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      toast.success('Design saved! Ready for next step.');
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 gap-2 bg-primary hover:bg-rose-dark text-primary-foreground shadow-lg px-6 py-5 text-base font-medium z-50"
    >
      Next
      <ArrowRight className="h-5 w-5" />
    </Button>
  );
}
