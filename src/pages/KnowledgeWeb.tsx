import { useState, useMemo, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Fuse from 'fuse.js';
import { Loader2 } from 'lucide-react';
import { KnowledgeList } from '@/components/knowledge/KnowledgeList';
import { KnowledgeModal } from '@/components/knowledge/KnowledgeModal';
import { ProficiencyScaleExplanation } from '@/components/knowledge/ProficiencyScaleExplanation';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { SearchInput } from '@/components/common/SearchInput';
import { knowledges } from '@/data/knowledges';
import { CONTENT_PADDING } from '@/config/spacing';

/**
 * Lazy-loaded KnowledgeGraph component
 * Only loaded when graph view is selected, reducing initial bundle size
 */
const KnowledgeGraph = lazy(() =>
  import('@/components/knowledge/KnowledgeGraph').then((module) => ({
    default: module.KnowledgeGraph,
  }))
);

type ViewMode = 'cards' | 'graph';

/**
 * Knowledge Web Page
 *
 * Displays knowledge items in both card grid and graph visualization formats.
 * Supports switching between views and opening detailed markdown content in modals.
 */
export function KnowledgeWeb() {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (debouncedValue: string) => {
    setSearchTerm(debouncedValue);
  };

  // Fuzzy search configuration
  const fuse = useMemo(
    () =>
      new Fuse(knowledges, {
        keys: ['title', 'content', 'category', 'tags'],
        threshold: 0.3,
        includeScore: true,
      }),
    []
  );

  // Filter knowledges based on search term
  const filteredKnowledges = useMemo(() => {
    if (!searchTerm.trim()) {
      return knowledges;
    }

    const results = fuse.search(searchTerm);
    return results.map((result) => result.item);
  }, [searchTerm, fuse]);

  // Sort knowledges: items with markdownFile come first
  const sortedKnowledges = useMemo(() => {
    return [...filteredKnowledges].sort((a, b) => {
      const aHasMarkdown = !!a.markdownFile;
      const bHasMarkdown = !!b.markdownFile;

      if (aHasMarkdown && !bHasMarkdown) return -1;
      if (!aHasMarkdown && bHasMarkdown) return 1;
      return 0;
    });
  }, [filteredKnowledges]);

  const handleKnowledgeClick = (knowledgeId: string) => {
    const knowledge = knowledges.find((k) => k.id === knowledgeId);
    if (knowledge?.markdownFile) {
      setSelectedNodeId(knowledgeId);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Keep selectedNodeId until modal animation completes
    // It will be reset when modal closes
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`max-w-7xl mx-auto ${CONTENT_PADDING.horizontal} py-8 lg:py-12`}
    >
      <div className="mb-8 lg:mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {t('knowledgeWeb.title', 'Knowledge Web')}
        </h1>

        <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
          {t(
            'knowledgeWeb.description',
            'Explore my technical knowledge and skills. Click on any node to view detailed information.'
          )}
        </p>

        <ProficiencyScaleExplanation />

        <ToggleGroup
          type="single"
          value={viewMode}
          onValueChange={(value) => {
            if (value) setViewMode(value as ViewMode);
          }}
          className="mb-6"
        >
          <ToggleGroupItem value="cards" aria-label="Cards view">
            {t('knowledgeWeb.viewCards', 'Cards')}
          </ToggleGroupItem>
          <ToggleGroupItem value="graph" aria-label="Graph view">
            {t('knowledgeWeb.viewGraph', 'Graph')}
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <section className="mb-8 lg:mb-12">
        {viewMode === 'cards' && (
          <>
            <div className="mb-6">
              <SearchInput
                onSearchChange={handleSearchChange}
                placeholder="Search knowledge..."
                className="w-full max-w-md"
              />
            </div>
            <div className="h-[calc(100vh-400px)] min-h-[600px]">
              <KnowledgeList
                nodes={sortedKnowledges}
                onNodeClick={handleKnowledgeClick}
              />
            </div>
          </>
        )}

        {viewMode === 'graph' && (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-[calc(100vh-200px)] min-h-[800px]">
                <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
              </div>
            }
          >
            <KnowledgeGraph onNodeClick={handleKnowledgeClick} />
          </Suspense>
        )}
      </section>

      <KnowledgeModal
        nodeId={selectedNodeId}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </motion.div>
  );
}
