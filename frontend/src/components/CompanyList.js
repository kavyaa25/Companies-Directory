import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CompanyCard from './CompanyCard';

export default function CompanyList({ filters, page, setPage, sort }) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [total, setTotal] = useState(0);
  const limit = 8;  // Companies per page

  useEffect(() => {
    async function fetchCompanies() {
      setLoading(true);
      setError('');
      try {
        const params = {
          ...filters,
          page,
          limit,
          sort,
        };
        const { data } = await axios.get('http://localhost:5000/companies', { params });
        setCompanies(data.companies);
        setTotal(data.total);
      } catch (err) {
        setError('Failed to fetch companies. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    fetchCompanies();
  }, [filters, page, sort]);

  const totalPages = Math.ceil(total / limit);

  if (loading) return <div className="text-center text-gray-700 dark:text-gray-300">Loading companies...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  if (companies.length === 0)
    return <div className="text-center text-gray-700 dark:text-gray-300">No companies found with the selected filters.</div>;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companies.map(company => (
          <CompanyCard key={company._id} company={company} />
        ))}
      </div>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page <= 1}
            className={`mx-2 px-4 py-2 rounded ${
              page <= 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-indigo-600'
            }`}
          >
            Prev
          </button>
          <span className="mx-2 text-gray-700 dark:text-gray-300">{`Page ${page} of ${totalPages}`}</span>
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page >= totalPages}
            className={`mx-2 px-4 py-2 rounded ${
              page >= totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-indigo-600'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
