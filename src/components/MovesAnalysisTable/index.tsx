import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { imgchart, imglist } from '../../images/icon';
import { BsFillPlusSquareFill, BsDashSquare } from 'react-icons/bs';
import React from 'react';

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

const MovesAnalysisTable = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
        <div className="max-w-full flex">
          <div className="flex items-stretch gap-2">
            <Menu as="div" className="relative inline-block text-left">
              <div className="h-full">
                <MenuButton className="inline-flex items-center w-full h-full justify-center gap-x-1.5 rounded-md bg-bodydark2 rounded-md text-white hover:cursor-pointer hover:bg-bodydark dark:bg-boxdark dark:border-[1px] dark:border-bodydark2 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Options
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-bodydark1 dark:bg-bodydark2 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 font-semibold text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Cost Share (%)
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 font-semibold text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Demand
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 font-semibold text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Number of SN/Lots
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 font-semibold text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Quantity
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 font-semibold text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Real Quantity
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 font-semibold text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Unit Factor
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 font-semibold text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Unit Price
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 font-semibold text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Weight
                    </a>
                  </MenuItem>
                </div>
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 font-semibold text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Count
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <Link to="*">
              <div className="py-2 px-3 bg-bodydark1 font-semibold rounded-md text-gray-900 text- hover:cursor-pointer hover:bg-bodydark">
                Insert in Spreadsheet
              </div>
            </Link>
            <div className="flex flex-row items-center gap-1 rounded-lg bg-bodydark1 dark:bg-bodydark2">
              <div className="w-8 h-8 p-2 hover:opacity-30">
                <img src={imgchart} alt="imgchart" />
              </div>
              <div className="w-8 h-8 p-2 hover:opacity-30">
                <img src={imglist} alt="imgList" />
              </div>
            </div>
          </div>
        </div>
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
                      colSpan={10}
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
                      colSpan={2}
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 border-custom"
                    >
                      <div className="flex items-center gap-1">
                        <BsFillPlusSquareFill />
                        Time: Receipts
                      </div>
                    </th>
                    <th
                      colSpan={2}
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 border-custom"
                    >
                      <div className="flex items-center gap-1">
                        <BsFillPlusSquareFill />
                        Time: Delivery Orders
                      </div>
                    </th>
                    <th
                      colSpan={2}
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 border-custom"
                    >
                      <div className="flex items-center gap-1">
                        <BsFillPlusSquareFill />
                        Time: Manufacturing
                      </div>
                    </th>
                    <th
                      colSpan={2}
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 border-custom"
                    >
                      <div className="flex items-center gap-1">
                        <BsFillPlusSquareFill />
                        Time: PoS Orders
                      </div>
                    </th>
                    <th
                      colSpan={2}
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
                    <th
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium text-gray-900 border-custom"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium text-gray-900 border-custom"
                    >
                      Count
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium text-gray-900 border-custom"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium text-gray-900 border-custom"
                    >
                      Count
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium text-gray-900 border-custom"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium text-gray-900 border-custom"
                    >
                      Count
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium text-gray-900 border-custom"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium text-gray-900 border-custom"
                    >
                      Count
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium text-gray-900 border-custom"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-center text-sm font-medium border-custom"
                    >
                      Count
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-gray-2 dark:bg-meta-4">
                  <tr>
                    <td
                      colSpan={1}
                      scope="col"
                      className="whitespace-nowrap py-2 pl-2 pr-2 text-left text-sm font-medium text-gray-900 border-custom"
                    >
                      <div className='flex items-center gap-1 text-left'>
                        <BsDashSquare />
                        Total
                      </div>
                    </td>
                    {transactions.map((transaction, index) => (
                      <React.Fragment key={index}>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-right text-sm font-semibold text-gray-500 border-custom">
                          {transaction.quantity}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-right text-sm font-semibold text-gray-900 border-custom">
                          {transaction.count}
                        </td>
                      </React.Fragment>
                    ))}
                  </tr>
                  <tr>
                    <td
                      colSpan={1}
                      scope="col"
                      className="whitespace-nowrap py-2 pl-6 pr-2 text-left text-sm font-medium text-gray-900 border-custom"
                    >
                      <div className='flex items-center gap-1 text-right'>
                        <BsFillPlusSquareFill />
                        October 2024
                      </div>
                    </td>
                    {transactions.map((transaction, index) => (
                      <React.Fragment key={index}>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-right text-sm font-semibold text-gray-500 border-custom">
                          {transaction.quantity}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-right text-sm font-semibold text-gray-900 border-custom">
                          {transaction.count}
                        </td>
                      </React.Fragment>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovesAnalysisTable;
