import React from 'react';

export default function FilterPanel({ filters, setFilters }) {
  const handleChange = e => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const clearFilters = () => {
    setFilters({ name: '', location: '', industry: '' });
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow mb-6">
      <div className="flex flex-wrap gap-4">
        <input
          name="name"
          placeholder="Filter by Name"
          value={filters.name}
          onChange={handleChange}
          className="flex-grow p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <input
          name="location"
          placeholder="Filter by Location"
          value={filters.location}
          onChange={handleChange}
          className="flex-grow p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <input
          name="industry"
          placeholder="Filter by Industry"
          value={filters.industry}
          onChange={handleChange}
          className="flex-grow p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button
          onClick={clearFilters}
          className="bg-primary hover:bg-indigo-600 text-white px-4 rounded-md transition"
          type="button"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
