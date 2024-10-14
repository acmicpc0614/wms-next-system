import React from 'react';
import { Link } from 'react-router-dom';
import { imgGear } from '../../images/icon';

interface TopSearchBarProps {
  btns?: { label: string; path: string }[]; // Array of button objects with label and path
  title?: string; // Optional: title as a string
  pagination?: boolean; // Optional: boolean for pagination
  tools?: boolean; // Array of tool objects with label and path
}

const StockTopSearchBar: React.FC<TopSearchBarProps> = ({
  btns,
  title,
  pagination,
  tools,
}) => {
  console.log('btns =>', btns);
  return (
    <>
      <div className="flex flex-row justify-between m-2 w-full">
        <div className="flex flex-row gap-6 items-center">
          {btns &&
            btns.map((btn, index) => (
              <Link key={index} to={btn.path}>
                <div className="py-2 px-3 border-2 bg-bodydark2 rounded-md text-white hover:cursor-pointer hover:bg-bodydark">
                  {btn.label}
                </div>
              </Link>
            ))}
          <div className="flex flex-row text-center items-center gap-2 font-bold">
            {title}
            <img src={imgGear} alt="gear" className="w-4 h-4" />
          </div>
        </div>

        <div className="relative items-center flex">
          <input
            type="search"
            placeholder="Search..."
            className="pl-8 pr-2 py-1 border border-gray-300 rounded-md w-80 dark:bg-boxdark bg-bodydark1 focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="flex flex-row gap-6 items-center">
          {pagination && (
            <div className="flex items-center space-x-2">
              <button
                className="p-1 hover:bg-gray-200 rounded"
                aria-label="Previous page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <span className="text-sm">14/14</span>
              <button
                className="p-1 hover:bg-gray-200 rounded"
                aria-label="Next page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StockTopSearchBar;
