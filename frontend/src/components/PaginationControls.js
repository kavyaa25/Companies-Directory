import React from 'react';

export default function PaginationControls({ page, totalPages, setPage }) {
  return (
    <div className="flex justify-center items-center space-x-4 my-6">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
        className={`px-4 py-2 rounded-md ${
          page <= 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-indigo-600'
        }`}
      >
        Prev
      </button>
      <span className="text-gray-700 dark:text-gray-300">{`Page ${page} of ${totalPages}`}</span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page >= totalPages}
        className={`px-4 py-2 rounded-md ${
          page >= totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-indigo-600'
        }`}
      >
        Next
      </button>
    </div>
  );
}
