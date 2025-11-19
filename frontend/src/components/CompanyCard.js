import React from 'react';

export default function CompanyCard({ company }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{company.name}</h3>
      <p className="mt-1 text-gray-600 dark:text-gray-300">{company.industry} - {company.location}</p>
      <p className="mt-2 text-gray-700 dark:text-gray-400">{company.description}</p>
      {company.website && (
        <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-2 block">
          Visit Website
        </a>
      )}
    </div>
  );
}
