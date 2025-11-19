import React, { useState } from 'react';
import FilterPanel from './components/FilterPanel';
import CompanyList from './components/CompanyList';
import SortOptions from './components/SortOptions';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  const [filters, setFilters] = useState({ name: '', location: '', industry: '' });
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('name');

  // Reset page when filters or sorting change
  React.useEffect(() => {
    setPage(1);
  }, [filters, sort]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Companies Directory</h1>
          <ThemeToggle />
        </header>
        <FilterPanel filters={filters} setFilters={setFilters} />
        <SortOptions sort={sort} setSort={setSort} />
        <CompanyList filters={filters} page={page} setPage={setPage} sort={sort} />
      </div>
      <footer className="text-center p-4 text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Companies Directory
      </footer>
    </div>
  );
}
