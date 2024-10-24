import React, { useState, useEffect } from 'react';

import CMSPagination from '../CMSPagination';
import LocationType from '../../types/LocationType';
import Location from '../ModalNew/Location';
import appFetch from '../../utils/appFetch';

interface SelectProps {
  letters: string[];
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleFocus: () => void;
  handleChangeString: (str: string) => void;
}

const SelectLocation: React.FC<SelectProps> = ({
  letters,
  value,
  handleChange,
  handleFocus,
  handleChangeString,
}) => {
  const [locationData, setLocationData] = useState<LocationType[]>([]);
  const [sortedData, setSortedData] = useState<LocationType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortKey, setSortKey] = useState<keyof LocationType | ''>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, [isModalOpen]);

  useEffect(() => {
    const filteredLocations = locationData.filter((location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setSortedData(filteredLocations);
  }, [searchTerm]);

  const fetchData = async () => {
    try {
      const response = await appFetch('/api/locations', {
        method: 'GET',
      });

      setLocationData(response);
      setSortedData(response);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleNewModal = () => {
    setIsNewModalOpen(!isNewModalOpen);
  };

  const sortData = (
    data: LocationType[],
    key: keyof LocationType,
    order: 'asc' | 'desc',
  ) => {
    return data.sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (aValue < bValue) return order === 'asc' ? -1 : 1;
      if (aValue > bValue) return order === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const handleSort = (key: keyof LocationType) => {
    const newOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(newOrder);
    const sort = sortData([...locationData], key, sortOrder);
    setSortedData(sort);
  };

  const indexOfLastLocation = currentPage * itemsPerPage;
  const indexOfFirstLocation = indexOfLastLocation - itemsPerPage;
  const currentLocation = sortedData.slice(
    indexOfFirstLocation,
    indexOfLastLocation,
  );
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const totalNumbers = sortedData.length;

  return (
    <div>
      <form className="w-full">
        <select
          value={value}
          onChange={(e) => {
            if (e.target.value === 'searchMore') {
              toggleModal();
            } else {
              handleChange(e);
            }
          }}
          onFocus={handleFocus}
          className="w-full focus:border-b-[1px] focus:border-b-bodydark2 focus:outline-none dark:bg-boxdark"
        >
          <option value="" disabled>
            Choose
          </option>
          {letters.map((letter) => (
            <option value={letter} key={letter}>
              {letter}
            </option>
          ))}
          {!letters.includes(value) && value !== '' && (
            <option value={value}>{value}</option>
          )}
          <option
            onClick={toggleModal}
            value="searchMore"
            className="italic"
            style={{ color: 'blue' }}
          >
            Search More...
          </option>
        </select>
      </form>

      {/* Main modal */}
      {isModalOpen && (
        <div className="fixed left-0 top-0 z-99999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
            className="flex flex-col items-center justify-between w-full max-w-[60%] rounded-lg bg-white text-center dark:bg-boxdark"
          >
            <div className="flex items-center justify-between w-full px-4 py-3">
              <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
                Search: Location
              </h3>
              <button
                type="button"
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <hr className="border-t border-gray-300 w-full mx-auto" />
            <div className="relative items-center flex py-3">
              <input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
            <table className="min-w-full table-fixed divide-y divide-gray-300">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                  <th
                    scope="col"
                    className="min-w-[12rem] py-3.5 px-3 text-left text-sm font-semibold text-gray-900 cursor-pointer"
                    onClick={() => handleSort('name')}
                  >
                    Name&nbsp;
                    {sortKey === 'name'
                      ? sortOrder === 'asc'
                        ? '↑'
                        : '↓'
                      : ''}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {currentLocation.map((item, idx) => (
                  <tr
                    key={idx}
                    onClick={() => {
                      handleChangeString(item.name);
                      setIsModalOpen(false);
                    }}
                    className={`${
                      idx % 2 === 1
                        ? 'bg-gray-2 dark:bg-meta-4'
                        : 'dark:bg-boxdark'
                    } hover:cursor-pointer border-b border-[#aaaaaa]`}
                  >
                    <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
                      {item.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <CMSPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalNumbers={totalNumbers}
              onPageChange={handlePageChange}
            />
            <hr className="border-t border-gray-300 w-full mx-auto" />
            <div className="flex gap-x-4 w-full px-4 py-3">
              <button
                onClick={() => {
                  setIsNewModalOpen(true);
                  setIsModalOpen(false);
                }}
                className="block px-5 rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
              >
                New
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="block px-5 rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New modal */}
      {isNewModalOpen && <Location toggleNewModal={toggleNewModal} />}
    </div>
  );
};

export default SelectLocation;
