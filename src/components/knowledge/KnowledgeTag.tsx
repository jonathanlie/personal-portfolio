import { Badge } from '@/components/ui/badge';

interface KnowledgeTagProps {
  /** The tag text to display */
  tag: string;
}

/**
 * Unified Knowledge Tag Component
 *
 * Provides consistent styling for tags across KnowledgeListItem and KnowledgeModal.
 * Uses modal-style design: rounded-full, uppercase, with white/10 background.
 */
export function KnowledgeTag({ tag }: KnowledgeTagProps) {
  return (
    <Badge
      variant="outline"
      className="bg-white/10 border-white/20 text-white/90 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider font-normal"
    >
      {tag}
    </Badge>
  );
}
