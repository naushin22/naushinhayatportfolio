import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { defaultContent, type PortfolioContent } from './portfolio';
import { supabase } from './supabase';

interface PortfolioContextValue {
  content: PortfolioContent;
  loading: boolean;
  saving: boolean;
  saveContent: (next: PortfolioContent) => Promise<void>;
  refresh: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextValue | null>(null);
const cacheKey = 'naushin-portfolio-content';

function readCachedContent() {
  try {
    const cached = localStorage.getItem(cacheKey);
    return cached ? (JSON.parse(cached) as PortfolioContent) : defaultContent;
  } catch {
    return defaultContent;
  }
}

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<PortfolioContent>(readCachedContent);
  const [loading, setLoading] = useState(Boolean(supabase));
  const [saving, setSaving] = useState(false);

  const refresh = async () => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    const { data, error } = await supabase.from('portfolio_content').select('content').eq('id', 1).maybeSingle();
    if (!error && data?.content) {
      setContent(data.content as PortfolioContent);
      localStorage.setItem(cacheKey, JSON.stringify(data.content));
    }
    setLoading(false);
  };

  useEffect(() => { void refresh(); }, []);

  const saveContent = async (next: PortfolioContent) => {
    setSaving(true);
    if (supabase) {
      const { error } = await supabase.from('portfolio_content').upsert({ id: 1, content: next, updated_at: new Date().toISOString() });
      if (error) {
        setSaving(false);
        throw error;
      }
    }
    setContent(next);
    localStorage.setItem(cacheKey, JSON.stringify(next));
    setSaving(false);
  };

  return <PortfolioContext.Provider value={{ content, loading, saving, saveContent, refresh }}>{children}</PortfolioContext.Provider>;
}

export function usePortfolioContent() {
  const value = useContext(PortfolioContext);
  if (!value) throw new Error('usePortfolioContent must be used inside PortfolioProvider');
  return value;
}