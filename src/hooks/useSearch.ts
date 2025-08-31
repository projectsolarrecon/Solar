import { useState, useMemo } from 'react';
import { searchData, SearchItem } from '../data/searchData';

export interface SearchResult extends SearchItem {
  score: number;
}

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase().trim();
    const searchResults: SearchResult[] = [];

    searchData.forEach(item => {
      let score = 0;
      
      // Title matches (highest priority)
      if (item.title.toLowerCase().includes(searchTerm)) {
        score += 10;
        if (item.title.toLowerCase().startsWith(searchTerm)) {
          score += 5; // Bonus for starting with search term
        }
      }

      // Category matches
      if (item.category.toLowerCase().includes(searchTerm)) {
        score += 8;
      }

      // Content/excerpt matches
      if (item.content.toLowerCase().includes(searchTerm)) {
        score += 5;
      }

      if (item.excerpt.toLowerCase().includes(searchTerm)) {
        score += 3;
      }

      // Word boundary matches (whole words)
      const words = searchTerm.split(' ');
      words.forEach(word => {
        if (word.length > 2) {
          const regex = new RegExp(`\\b${word}\\b`, 'i');
          if (regex.test(item.title)) score += 3;
          if (regex.test(item.content)) score += 2;
        }
      });

      if (score > 0) {
        searchResults.push({ ...item, score });
      }
    });

    // Sort by score (highest first) and limit to top 8 results
    return searchResults
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [query]);

  const clearSearch = () => {
    setQuery('');
    setIsOpen(false);
  };

  return {
    query,
    setQuery,
    results,
    isOpen,
    setIsOpen,
    clearSearch
  };
};