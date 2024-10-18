import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ManufactoringsData, ReceiptsData } from '../../../store/StaticData';
import {
  EmptyIconStar,
  IconArrowRotateLeft,
  IconSearch,
  IconThMenu,
  IconUser,
  IconGear,
} from '../../../images/icon';
import CustomBtn from '../../../components/CustomBtn';

interface Receipt {
  id: string;
  Reference: string;
  Contact: string;
  ScheduledData: string;
  SourceDoc: string;
  Status: string;
}

const ReceiptDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<Receipt | null>(null);
  const [activeTab, setActiveTab] = useState('Operations');

  const navigate = useNavigate();
  const handleReturnClick = () => {
    navigate('/operations/receipts/');
  };

  useEffect(() => {
    const foundData = ReceiptsData.find((item) => item.id === id);
    setData(foundData || null);
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <CustomBtn title="New" clickedPath="/operations/receipts/new" />
          <div className="flex flex-col">
            <p>Receipts</p>
            <div className="flex flex-row items-center gap-2">
              {data.Reference}
              <IconGear />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div
            className="px-3 py-2 rounded-l-md border-2 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark"
            onClick={handleReturnClick}
          >
            <IconArrowRotateLeft />
            Returns
          </div>
          <div className="px-3 py-2 rounded-r-md border-2 border-l-0 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
            <IconThMenu />
            Moves
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="px-3 py-2 rounded-l-md border-2 border-bodydark2">
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
          </div>
          <div className="px-3 py-2 rounded-r-md border-2 border-l-0 border-bodydark2">
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
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-1">
        <CustomBtn title="Print" fill={true} />
        <CustomBtn title="Return" fill={true} />
      </div>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="flex flex-row gap-5 items-center h-10">
          <EmptyIconStar />
          <h1 className="text-3xl">{data.Reference}</h1>
        </div>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-10 w-[50%]">
            <div className="flex flex-col gap-2">
              <p>Receive From</p>
              <p>Operation Type</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-success">{data.Contact}</p>
            </div>
          </div>
          <div className="flex flex-row gap-10 w-[50%]">
            <div className="flex flex-col gap-2">
              <p>Scheduled Data</p>
              <p>Effective Data</p>
              <p>Source Document</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>{data.ScheduledData}</p>
              <p>{data.ScheduledData}</p>
              <p>{data.SourceDoc}</p>
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="mb-4">
          <ul className="flex border-b">
            {['Operations', 'Additional Info', 'Note'].map((tab) => (
              <li key={tab} className="-mb-px mr-1">
                <button
                  className={`bg-white dark:bg-boxdark inline-block py-2 px-4 font-semibold ${
                    activeTab === tab
                      ? 'border-l border-t border-r rounded-t text-blue-700'
                      : 'text-blue-500 hover:text-blue-800'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                </button>
              </li>
            ))}
          </ul>
          <div className="">
            {activeTab === 'Operations' && <ReceiptDetailOperationTable />}
            {activeTab === 'Additional Info' && <p>Log note content</p>}
            {activeTab === 'Note' && <p>Activities content</p>}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-1">
          <div className="p-2 bg-bodydark2 rounded-md text-white">
            Send message
          </div>
          <div className="p-2 bg-bodydark2 rounded-md text-white">Log note</div>
          <div className="p-2 bg-bodydark2 rounded-md text-white">
            Activities
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <IconSearch />
          <IconUser />
          <p className="text-sm text-success font-bold">Following</p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptDetail;

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
                  Warehouse
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {ManufactoringsData.map((item, idx) => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
