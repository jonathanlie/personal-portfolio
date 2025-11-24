import { useState, useEffect, useRef } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { loadMarkdownContent, MarkdownLoadError } from '@/utils/loadMarkdown';
import { getKnowledgeById } from '@/data/knowledges';
import { ProficiencyScore } from './ProficiencyScore';
import { KnowledgeTag } from './KnowledgeTag';
import { PROFICIENCY_COLORS } from '@/config/colors';

/**
 * Modal-specific markdown components with role card styling
 * H2 headings are styled as timeline role cards with left border
 */
const modalMarkdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-white tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <div
      className="mb-8 last:mb-0 border-l-2 pl-4"
      style={{ borderColor: PROFICIENCY_COLORS.architectural }}
    >
      <h2 className="text-lg md:text-xl font-bold text-white mb-3">
        {children}
      </h2>
    </div>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold mt-6 mb-3 text-white tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-base leading-[1.6] mb-8 text-[#CCCCCC] last:mb-0">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-none mb-8 pl-0 space-y-2">{children}</ul>
  ),
  li: ({ children }) => (
    <li className="flex items-start text-base leading-[1.6] text-[#CCCCCC]">
      <span className="mr-3 mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#CCCCCC]" />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  code: ({ className, children, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="bg-white/10 text-[#CCCCCC] px-1.5 py-0.5 rounded text-sm font-mono"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className="bg-transparent p-0 text-[#CCCCCC]" {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="bg-white/10 p-4 rounded-lg overflow-x-auto mb-4 leading-relaxed text-[#CCCCCC]">
      {children}
    </pre>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="underline"
      style={{
        color: PROFICIENCY_COLORS.architectural,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#ff9500';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = PROFICIENCY_COLORS.architectural;
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
};

interface KnowledgeModalProps {
  /** The ID of the knowledge node to display */
  nodeId: string | null;
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when the modal should be closed */
  onClose: () => void;
}

/**
 * Knowledge Modal Component
 *
 * Displays detailed markdown content for a knowledge node in a modal dialog.
 * Handles loading states, error states, and dynamically imports markdown content.
 */
export function KnowledgeModal({
  nodeId,
  isOpen,
  onClose,
}: KnowledgeModalProps) {
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const contentBodyRef = useRef<HTMLDivElement | null>(null);

  const node = nodeId ? getKnowledgeById(nodeId) : null;

  // Capture focus when modal opens, restore when it closes
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current =
        (document.activeElement as HTMLElement) || null;
    } else {
      const timeoutId = setTimeout(() => {
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
          previousFocusRef.current = null;
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !node) {
      setMarkdownContent(null);
      setError(null);
      setIsLoading(false);
      return;
    }

    if (!node.markdownFile) {
      setError('This knowledge item does not have detailed content available.');
      setIsLoading(false);
      return;
    }

    const loadContent = async () => {
      setIsLoading(true);
      setError(null);
      setMarkdownContent(null);

      try {
        const content = await loadMarkdownContent(node.markdownFile!);
        setMarkdownContent(content);
      } catch (err) {
        if (err instanceof MarkdownLoadError) {
          setError(
            `Failed to load content for ${node.title}. The markdown file "${node.markdownFile}" may not exist.`
          );
        } else {
          setError(
            `An unexpected error occurred while loading content for ${node.title}.`
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, [isOpen, node]);

  // Focus content body after markdown content is loaded
  useEffect(() => {
    if (!isLoading && markdownContent && contentBodyRef.current) {
      // Use setTimeout to ensure the content is rendered before focusing
      const timeoutId = setTimeout(() => {
        contentBodyRef.current?.focus();
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoading, markdownContent]);

  if (!node) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="fixed left-[50%] top-auto bottom-0 md:top-[50%] md:bottom-auto z-50 w-full max-w-4xl translate-x-[-50%] md:translate-y-[-50%] translate-y-0 p-0 gap-0 border-0 bg-transparent shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 md:rounded-2xl rounded-t-[24px] rounded-b-none max-h-[85vh] overflow-hidden flex flex-col focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 [&>button]:absolute [&>button]:right-6 [&>button]:top-6 [&>button]:z-10 [&>button]:h-11 [&>button]:w-11 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:rounded-full [&>button]:bg-white/10 [&>button]:hover:bg-white/20 [&>button]:text-white [&>button]:cursor-pointer [&>button]:focus-visible:outline-none [&>button]:focus-visible:ring-0 [&>button]:focus-visible:ring-offset-0 [&>button]:transition-colors">
        {/* Modal Container with backdrop blur and styling */}
        <div className="bg-[rgba(20,20,25,0.85)] backdrop-blur-md border border-white/10 rounded-t-[24px] md:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col max-h-[85vh] overflow-hidden">
          {/* Header Section */}
          <DialogHeader className="flex flex-col px-6 pt-6 pb-4 border-b border-white/5 shrink-0">
            <div className="flex items-start justify-between gap-4 mb-4">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-white tracking-tight flex-1">
                {node.title}
              </DialogTitle>
            </div>

            {/* Metadata Row: Proficiency and Tags */}
            <div className="flex flex-wrap items-center gap-4">
              {node.proficiencyScore && (
                <ProficiencyScore
                  score={node.proficiencyScore}
                  showLabel={true}
                />
              )}
              {node.tags && node.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {node.tags.map((tag) => (
                    <KnowledgeTag key={tag} tag={tag} />
                  ))}
                </div>
              )}
            </div>
          </DialogHeader>

          {/* Content Body - Scrollable */}
          <div
            ref={contentBodyRef}
            tabIndex={-1}
            className="scroll-container flex-1 overflow-y-auto px-6 py-6 focus:outline-none"
          >
            {isLoading && (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-gray-400 mb-4" />
                <p className="text-sm text-gray-400">Loading content...</p>
              </div>
            )}

            {error && (
              <div className="flex flex-col items-center justify-center py-12">
                <AlertCircle className="h-8 w-8 text-red-500 mb-4" />
                <p className="text-sm text-red-400 text-center max-w-md">
                  {error}
                </p>
              </div>
            )}

            {!isLoading && !error && markdownContent && (
              <ReactMarkdown components={modalMarkdownComponents}>
                {markdownContent}
              </ReactMarkdown>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
