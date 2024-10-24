import React from 'react';
import { Link } from 'react-router-dom';
import { IconGear } from '../../images/icon';

interface TopSearchBarProps {
  btns?: { label: string; path: string }[]; // Array of button objects with label and path
  title?: string; // Optional: title as a string
  pagination?: boolean; // Optional: boolean for pagination
  tools?: boolean; // Array of tool objects with label and path
}

const TopSearchBar: React.FC<TopSearchBarProps> = ({
  btns,
  title,
}) => {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-row gap-2 items-center">
            {btns &&
              btns.map((btn, index) => (
                <Link key={index} to={btn.path}>
                  <div className="h-8 px-3 items-center flex bg-bodydark2 rounded-md text-white hover:cursor-pointer hover:bg-bodydark dark:bg-boxdark dark:border-[1px] dark:border-bodydark2">
                    {btn.label}
                  </div>
                </Link>
              ))}
          </div>
          <div className="flex flex-row text-center items-center gap-2 font-bold">
            {title}
            <IconGear />
          </div>
        </div>

        <div className="relative items-center flex">
          <input
            type="search"
            placeholder="Search..."
            className="pl-8 pr-2 py-1 border border-bodydark2 rounded-md w-80 dark:bg-boxdark bg-stroke focus:outline-none"
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
      </div>
    </>
  );
};

export default TopSearchBar;
