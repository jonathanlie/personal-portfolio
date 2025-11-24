import { Knowledge } from '@/types/knowledge';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ProficiencyScore } from './ProficiencyScore';
import { KnowledgeTag } from './KnowledgeTag';

interface KnowledgeListItemProps {
  node: Knowledge;
  onClick?: (nodeId: string) => void;
}

export function KnowledgeListItem({ node, onClick }: KnowledgeListItemProps) {
  const hasModalContent = !!node.markdownFile;
  const isClickable = hasModalContent;

  const handleClick = () => {
    if (isClickable) {
      onClick?.(node.id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      handleClick();
    }
  };

  // Get category color from first tag or use default
  const categoryColor =
    node.tags && node.tags.length > 0
      ? 'rgba(120, 80, 255, 0.3)' // Primary color tint
      : 'rgba(120, 80, 255, 0.2)';

  return (
    <Card
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      className={`knowledge-card text-left transition-all duration-200 ease-in-out outline-none flex flex-col h-[300px] group relative ${
        isClickable
          ? 'knowledge-card-active cursor-pointer hover:-translate-y-1 focus-visible:ring-ring/50 focus-visible:ring-[3px]'
          : 'knowledge-card-dormant cursor-default'
      }`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {/* Category indicator bar for showcase cards */}
      {isClickable && (
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
          style={{ backgroundColor: categoryColor }}
        />
      )}
      <CardHeader className="p-6 pb-4 shrink-0">
        <div className="flex items-start justify-between gap-4 mb-2">
          <CardTitle
            className={`text-xl md:text-2xl font-bold leading-tight ${
              isClickable
                ? 'text-[#E0E0E0] dark:text-[#E0E0E0]'
                : 'text-[#6B7280] dark:text-[#6B7280]'
            }`}
          >
            {node.title}
          </CardTitle>
        </div>
        {isClickable ? (
          <CardDescription className="text-sm md:text-base text-[#B0B0B0] dark:text-[#B0B0B0] leading-relaxed mt-2 h-30 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {node.content}
          </CardDescription>
        ) : (
          node.content && (
            <CardDescription className="text-sm md:text-base text-[#6B7280] dark:text-[#6B7280] leading-relaxed mt-2 h-30 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {node.content}
            </CardDescription>
          )
        )}
      </CardHeader>
      <CardFooter className="p-6 pt-0 mt-auto flex flex-col gap-3">
        {(node.proficiencyScore || (node.tags && node.tags.length > 0)) && (
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col gap-3 flex-1 min-w-0">
              {node.tags && node.tags.length > 0 && (
                <div className="flex flex-nowrap gap-2 w-full h-6 overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {node.tags.map((tag) => (
                    <KnowledgeTag key={tag} tag={tag} />
                  ))}
                </div>
              )}
              {node.proficiencyScore && (
                <ProficiencyScore
                  score={node.proficiencyScore}
                  showLabel={true}
                />
              )}
            </div>
            {isClickable && (
              <div className="text-l text-[#B0B0B0] dark:text-[#B0B0B0] opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                →
              </div>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
