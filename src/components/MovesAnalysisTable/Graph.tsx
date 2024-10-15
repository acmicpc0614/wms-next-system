import { useState, useEffect, useRef } from 'react';
import { BsBarChartFill, BsFillPieChartFill, BsGraphUp } from 'react-icons/bs';
import ChartOne from '../ChartOne';
import ChartTwo from '../ChartTwo';
import ChartThree from '../ChartThree';

const Graph = () => {
  const [chartSelect, setChartSelect] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
        <div className="max-w-full flex">
          <div className="flex items-stretch gap-2">
            <div ref={dropdownRef}>
              <button
                id="dropdownCheckboxButton"
                onClick={toggleDropdown}
                className="relative text-white bg-bodydark2 rounded-md text-white hover:cursor-pointer hover:bg-bodydark dark:bg-boxdark dark:border-[1px] dark:border-bodydark2 font-semibold focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                Dropdown checkbox
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                  id="dropdownDefaultCheckbox"
                  className="absolute z-10 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownCheckboxButton"
                  >
                    <li>
                      <div className="flex items-center">
                        <input
                          id="checkbox-item-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="checkbox-item-1"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Cost Share (%)
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          defaultChecked
                          id="checkbox-item-2"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="checkbox-item-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Demand
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          id="checkbox-item-3"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="checkbox-item-3"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Number of SN/Lots
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          id="checkbox-item-4"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="checkbox-item-4"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Quantity
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          id="checkbox-item-5"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="checkbox-item-5"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Real Quantity
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          id="checkbox-item-6"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="checkbox-item-6"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Unit Factor
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          id="checkbox-item-7"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="checkbox-item-7"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Unit Price
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <input
                          id="checkbox-item-8"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor="checkbox-item-8"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Weight
                        </label>
                      </div>
                    </li>
                  </ul>
                  <div className="py-2 p-3 text-sm text-gray-700 dark:text-gray-200 flex items-center">
                    <input
                      id="checkbox-item-9"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="checkbox-item-9"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Count
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="py-2 px-3 bg-bodydark1 font-semibold rounded-md text-gray-900">
              Insert in Spreadsheet
            </div>
            <div className="flex flex-row items-center gap-1 rounded-lg bg-bodydark1 dark:bg-bodydark2">
              <div className="w-8 h-8 p-2 hover:opacity-30 hover:cursor-pointer" onClick={() => setChartSelect(1)}>
                <BsBarChartFill />
              </div>
              <div className="w-8 h-8 p-2 hover:opacity-30 hover:cursor-pointer" onClick={() => setChartSelect(2)}>
                <BsGraphUp />
              </div>
              <div className="w-8 h-8 p-2 hover:opacity-30 hover:cursor-pointer" onClick={() => setChartSelect(3)}>
                <BsFillPieChartFill />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="w-full inline-block py-2 align-middle sm:px-6 lg:px-8">
              {chartSelect === 1 && <ChartTwo />}
              {chartSelect === 2 && <ChartOne />}
              {chartSelect === 3 && <ChartThree />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
