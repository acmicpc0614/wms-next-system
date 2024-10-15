import React, { useState, useEffect, useRef } from 'react';
import { BsFillPlusSquareFill, BsDashSquare } from 'react-icons/bs';

const transactions = [
  {
    id: 1,
    quantity: 20.0,
    count: 1,
  },
  {
    id: 2,
    quantity: 20.0,
    count: 1,
  },
  {
    id: 3,
    quantity: 20.0,
    count: 1,
  },
  {
    id: 4,
    quantity: 20.0,
    count: 1,
  },
  {
    id: 5,
    quantity: 20.0,
    count: 1,
  },
  {
    id: 6,
    quantity: 20.0,
    count: 1,
  },
  // More transactions...
];

const labels = [
  { key: 'count', label: 'count' },
  { key: 'costShare', label: 'Cost Share (%)' },
  { key: 'demand', label: 'Demand' },
  { key: 'numberSN', label: 'Number of SN/Lots' },
  { key: 'quantity', label: 'Quantity' },
  { key: 'realQuantity', label: 'Real Quantity' },
  { key: 'unitFactor', label: 'Unit Factor' },
  { key: 'unitPrice', label: 'Unit Price' },
  { key: 'weight', label: 'Weight' },
];

const Measure = () => {
  const [check, setCheck] = useState({
    count: true,
    costShare: false,
    demand: false,
    numberSN: false,
    quantity: true,
    realQuantity: false,
    unitFactor: false,
    unitPrice: false,
    weight: false,
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [items, setItems] = useState<string[]>([]);
  const [number, setNumber] = useState(0);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const num = Object.values(check).filter((value) => value === true).length;
    setNumber(num);

    setItems(
      labels.reduce<string[]>((acc, { key, label }) => {
        if (check[key as keyof typeof check]) {
          acc.push(label);
        }
        return acc;
      }, []),
    );
  }, [
    check.count,
    check.costShare,
    check.demand,
    check.numberSN,
    check.quantity,
    check.realQuantity,
    check.unitFactor,
    check.unitPrice,
    check.weight,
  ]);

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
                          onChange={() =>
                            setCheck({ ...check, costShare: !check.costShare })
                          }
                          checked={check.costShare}
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
                          onChange={() =>
                            setCheck({ ...check, demand: !check.demand })
                          }
                          checked={check.demand}
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
                          onChange={() =>
                            setCheck({ ...check, numberSN: !check.numberSN })
                          }
                          checked={check.numberSN}
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
                          onChange={() =>
                            setCheck({ ...check, quantity: !check.quantity })
                          }
                          checked={check.quantity}
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
                          onChange={() =>
                            setCheck({
                              ...check,
                              realQuantity: !check.realQuantity,
                            })
                          }
                          checked={check.realQuantity}
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
                          onChange={() =>
                            setCheck({
                              ...check,
                              unitFactor: !check.unitFactor,
                            })
                          }
                          checked={check.unitFactor}
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
                          onChange={() =>
                            setCheck({ ...check, unitPrice: !check.unitPrice })
                          }
                          checked={check.unitPrice}
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
                          onChange={() =>
                            setCheck({ ...check, weight: !check.weight })
                          }
                          checked={check.weight}
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
                      onChange={() =>
                        setCheck({ ...check, count: !check.count })
                      }
                      checked={check.count}
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
            {/* <div className="flex flex-row items-center gap-1 rounded-lg bg-bodydark1 dark:bg-bodydark2">
              <div className="w-8 h-8 p-2 hover:opacity-30">
                <img src={imgchart} alt="imgchart" />
              </div>
              <div className="w-8 h-8 p-2 hover:opacity-30">
                <img src={imglist} alt="imgList" />
              </div>
            </div> */}
          </div>
        </div>
        {number !== 0 && (
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block py-2 align-middle sm:px-6 lg:px-8">
                <table>
                  <thead>
                    <tr>
                      <th
                        colSpan={1}
                        scope="col"
                        className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-medium text-gray-900"
                      ></th>
                      <th
                        colSpan={5 * number}
                        scope="col"
                        className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-medium text-gray-900 border-custom"
                      >
                        <div className="flex items-center gap-1">
                          <BsDashSquare />
                          Total
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th
                        colSpan={1}
                        scope="col"
                        className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-medium text-gray-900"
                      ></th>
                      <th
                        colSpan={number}
                        scope="col"
                        className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 border-custom"
                      >
                        <div className="flex items-center gap-1">
                          <BsFillPlusSquareFill />
                          Time: Receipts
                        </div>
                      </th>
                      <th
                        colSpan={number}
                        scope="col"
                        className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 border-custom"
                      >
                        <div className="flex items-center gap-1">
                          <BsFillPlusSquareFill />
                          Time: Delivery Orders
                        </div>
                      </th>
                      <th
                        colSpan={number}
                        scope="col"
                        className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 border-custom"
                      >
                        <div className="flex items-center gap-1">
                          <BsFillPlusSquareFill />
                          Time: Manufacturing
                        </div>
                      </th>
                      <th
                        colSpan={number}
                        scope="col"
                        className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 border-custom"
                      >
                        <div className="flex items-center gap-1">
                          <BsFillPlusSquareFill />
                          Time: PoS Orders
                        </div>
                      </th>
                      <th
                        colSpan={number}
                        scope="col"
                        className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 border-custom"
                      >
                        <div className="flex items-center gap-1">
                          <BsFillPlusSquareFill />
                          None
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th
                        colSpan={1}
                        scope="col"
                        className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-medium text-gray-900"
                      ></th>
                      {items.map((item, index) => (
                        <th
                          scope="col"
                          key={index}
                          className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium border-custom"
                        >
                          {item}
                        </th>
                      ))}
                      {items.map((item, index) => (
                        <th
                          scope="col"
                          key={index}
                          className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium border-custom"
                        >
                          {item}
                        </th>
                      ))}
                      {items.map((item, index) => (
                        <th
                          scope="col"
                          key={index}
                          className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium border-custom"
                        >
                          {item}
                        </th>
                      ))}
                      {items.map((item, index) => (
                        <th
                          scope="col"
                          key={index}
                          className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium border-custom"
                        >
                          {item}
                        </th>
                      ))}
                      {items.map((item, index) => (
                        <th
                          scope="col"
                          key={index}
                          className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium border-custom"
                        >
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-gray-2 dark:bg-meta-4">
                    <tr>
                      <td
                        colSpan={1}
                        scope="col"
                        className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-medium text-gray-900 border-custom"
                      >
                        <div className="flex items-center gap-1 text-left">
                          <BsDashSquare />
                          Total
                        </div>
                      </td>
                      {transactions.map((transaction, index) => (
                        <React.Fragment key={index}>
                          {items.map((item, index) => (
                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-right text-sm font-semibold text-gray-500 border-custom">
                              {transaction.quantity}
                            </td>
                          ))}
                        </React.Fragment>
                      ))}
                    </tr>
                    <tr>
                      <td
                        colSpan={1}
                        scope="col"
                        className="whitespace-nowrap py-2 pl-6 pr-2 text-left text-sm font-medium text-gray-900 border-custom"
                      >
                        <div className="flex items-center gap-1 text-right">
                          <BsFillPlusSquareFill />
                          October 2024
                        </div>
                      </td>
                      {transactions.map((transaction, index) => (
                        <React.Fragment key={index}>
                          {items.map((item, index) => (
                            <td className="whitespace-nowrap py-2 pl-4 pr-3 text-right text-sm font-semibold text-gray-500 border-custom">
                              {transaction.quantity}
                            </td>
                          ))}
                        </React.Fragment>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Measure;
