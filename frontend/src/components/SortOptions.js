import React from 'react';

export default function SortOptions({ sort, setSort }) {
  return (
    <div className="mb-4">
      <select
        value={sort}
        onChange={e => setSort(e.target.value)}
        className="p-2 border rounded-md border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="name">Sort by Name</option>
        <option value="location">Sort by Location</option>
        <option value="industry">Sort by Industry</option>
      </select>
    </div>
  );
}
