import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReceiptsData } from '../../../store/StaticData';
import {
  EmptyIconStar,
  IconArrowRotateLeft,
  IconThMenu,
  imgGear,
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
  const { id } = useParams<{ id: string }>(); // Specify the type for useParams
  const [data, setData] = useState<Receipt | null>(null); // Initialize state with Receipt type or null
  const navigate = useNavigate();
  const handleReturnClick = () => {
    navigate('/operations/receipts/');
  };

  useEffect(() => {
    const foundData = ReceiptsData.find((item) => item.id === id); // Correct usage of find
    setData(foundData || null); // Set to null if not found
  }, [id]); // Add id to the dependency array

  if (!data) {
    return <div>Loading...</div>; // Handle loading state
  }

  interface Tab {
    name: string;
    href: string;
    current: boolean;
  }

  // Create an array of tabs with the defined type
  const tabs: Tab[] = [
    { name: 'My Account', href: '#', current: true },
    { name: 'Company', href: '#', current: false },
    { name: 'Team Members', href: '#', current: true },
    { name: 'Billing', href: '#', current: false },
  ];

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
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
              <img src={imgGear} className="w-4 h-4" alt="gear" />
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
        <div className="flex flex-row  gap-5">
          <div className="flex flex-row gap-10 w-[50%]">
            <div className="flex flex-col gap-2">
              <p>Receive From</p>
              <p>Operation Type</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-success">{data.Contact}</p>
              {/* <p>{data.ScheduledData}</p> */}
            </div>
          </div>
          <div className="flex flex-row gap-10 w-[50%]">
            <div className="flex flex-col gap-2">
              <p>Scheduled Data</p>
              <p>Effective Data </p>
              <p>Source Document </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>{data.ScheduledData}</p>
              <p>{data.ScheduledData}</p>
              <p>{data.SourceDoc}</p>
            </div>
          </div>
        </div>

        {/* Tab bar */}

        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ReceiptDetail;
