import { useState } from 'react';
import {
  EmptyIconStar,
  IconGear,
  IconPushpin,
  IconSearch,
  IconUser,
} from '../../../images/icon';
import ReceiptDetailOperationTable from './ReceiptDetailOperationTable';

const NewReceipt = () => {
  const [activeTab, setActiveTab] = useState('Operations');
  return (
    <>
      <div className="flex flex-col gap-4 flex-1 h-full">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row gap-2 items-center">
              <div className="h-8 px-3 items-center flex bg-bodydark2 rounded-md text-white hover:cursor-pointer hover:bg-bodydark dark:bg-boxdark dark:border-[1px] dark:border-bodydark2">
                New
              </div>
            </div>
            <div className="flex flex-row text-center items-center gap-2 font-bold">
              New Receipt
              <IconGear />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <IconPushpin />
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 flex-1">
          <div className="flex flex-row gap-5 items-center h-10 mb-5">
            <EmptyIconStar />
            <h1 className="text-3xl font-semibold">New Receipt</h1>
          </div>
          <div className="flex md:flex-row gap-5 flex-col ">
            <div className="flex flex-row gap-10 md:w-[50%]">
              <div className="flex flex-col gap-2">
                <p>Receive From</p>
                <p>Destination Location</p>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="string"
                  className="focus:border-b-[1px] focus:border-b-bodydark2  focus:outline-none dark:bg-boxdark"
                  placeholder="e.g. Lumber Inc"
                />
                <input
                  type="string"
                  className="focus:border-b-[1px] focus:border-b-bodydark2  focus:outline-none dark:bg-boxdark"
                  placeholder="WH/Stock"
                />
              </div>
            </div>
            <div className="flex flex-row gap-10 md:w-[50%]">
              <div className="flex flex-col gap-2">
                <p>Scheduled Data</p>
                <p>Source Document</p>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="date"
                  className="focus:border-b-[1px] focus:border-b-bodydark2  focus:outline-none dark:bg-boxdark"
                  value={'2024-10-24'} // Correct format: YYYY-MM-DD
                />

                <input
                  type="string"
                  className="focus:border-b-[1px] focus:border-b-bodydark2  focus:outline-none dark:bg-boxdark"
                  placeholder="e.g. PC00032"
                />
              </div>
            </div>
          </div>

          {/* Tab bar */}
          <div className="mb-4 mt-8">
            <ul className="flex border-b">
              {['Operations'].map((tab) => (
                <li key={tab} className="-mb-px mr-1">
                  <button
                    className={`bg-white dark:bg-boxdark inline-block py-2 px-4 font-semibold ${
                      activeTab === tab
                        ? 'border-l border-t border-r rounded-t text-blue-700'
                        : 'text-blue-500 hover:text-blue-800'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() +
                      tab.slice(1).replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
            <div className="">
              {activeTab === 'Operations' && <ReceiptDetailOperationTable />}
            </div>
          </div>
        </div>
        {/* <div className="flex justify-between items-center">
          <div className="flex flex-row gap-1">
            <div className="p-2 bg-bodydark2 rounded-md text-white">
              Send message
            </div>
            <div className="p-2 bg-bodydark2 rounded-md text-white">
              Log note
            </div>
            <div className="p-2 bg-bodydark2 rounded-md text-white">
              Activities
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <IconSearch />
            <IconUser />
            <p className="text-sm text-success font-bold">Following</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default NewReceipt;

/*
const ReceiptDetailOperationTable = () => {
  return (
    <>
      <div className="mt-2 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                <th className="py-4 px-4 w-[50px] font-semibold text-black dark:text-white">
                  <input type="checkbox" />
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Product
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Demain
                </th>
              </tr>
            </thead>
            <tbody>
              {NewReceiptData.length > 0 ? (
                NewReceiptData.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 1 ? 'bg-gray-2 dark:bg-meta-4' : ''
                    } hover:cursor-pointer border-b border-[#aaaaaa]`}
                  >
                    <td className=" py-2 px-4  text-sm dark:border-strokedark">
                      <div className="flex flex-row gap-2">
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td className=" py-2 px-4  text-sm dark:border-strokedark hover:underline">
                      <p className="text-sm">{item.Reference}</p>
                    </td>
                    <td className=" py-2 px-4  text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">{item.Start}</p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark hover:underline"></td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark hover:underline">
                    <p className="text-sm text-success">Add a line</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

interface NewReceiptDataType {
  Reference: string;
  Start: string; // Adjust the type as necessary (e.g., Date if applicable)
}

const NewReceiptData: NewReceiptDataType[] = [];
*/
