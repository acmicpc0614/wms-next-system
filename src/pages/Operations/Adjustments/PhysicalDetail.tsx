import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { InventoryData } from '../../../store/StaticData';
import {
  EmptyIconStar,
  IconArrowRotateLeft,
  IconGear,
  IconSearch,
  IconThMenu,
  IconUser,
} from '../../../images/icon';
import CustomBtn from '../../../components/CustomBtn';
import GeneralInformationTab from '../../../components/PhysicalInventory/GeneralInformattionTab';
import SalesTab from '../../../components/PhysicalInventory/SalesTab';

interface InventoryInterface {
  id: string;
  Product: string; // Added Product property
  OnHandQueen: number; // Corrected property name
  CountedQuantity: number;
  Difference: number;
  ScheduledData: string;
  User: string;
}

const DeliveriesDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<InventoryInterface | null>(null);
  const [activeTab, setActiveTab] = useState('General Information');

  const navigate = useNavigate();
  const handleReturnClick = () => {
    navigate('/operations/physicalinventory/');
  };

  useEffect(() => {
    const foundData = InventoryData.find((item) => item.id === id);
    setData(foundData || null);
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <CustomBtn title="New" clickedPath="/operations/deliveries/new" />
          <div className="flex flex-col">
            <p className="text-success font-semibold">Inventory Adjustment</p>
            <div className="flex flex-row items-center gap-2">
              {data.Product}
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
        <CustomBtn title="Update Quantity" fill={true} />
        <CustomBtn title="Replenish" fill={true} />
        <CustomBtn title="Print Labels" fill={true} />
      </div>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="flex flex-row gap-5 items-center h-10">
          <EmptyIconStar />
          <h1 className="text-3xl">{data.Product}</h1>
        </div>
        <div className="flex flex-row gap-6 my-4">
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <p className="text-sm">Sales</p>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <p className="text-sm">Purchase</p>
          </div>
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <p className="text-sm">Point of Sale</p>
          </div>
        </div>

        {/* Tab bar */}
        <div className="mb-4">
          <ul className="flex border-b">
            {[
              'General Information',
              'Sales',
              'Purchase',
              'Inventory',
              'Accounting',
            ].map((tab) => (
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
            {activeTab === 'General Information' && <GeneralInformationTab />}
            {activeTab === 'Sales' && <SalesTab />}
            {activeTab === 'Purchase' && <SalesTab />}
            {activeTab === 'Inventory' && <GeneralInformationTab />}
            {activeTab === 'Accounting' && <SalesTab />}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-1">
          <div className="p-2 bg-bodydark2 rounded-md text-white hover:cursor-pointer hover:bg-bodydark">
            Send message
          </div>
          <div className="p-2 bg-bodydark2 rounded-md text-white hover:cursor-pointer hover:bg-bodydark">
            Log note
          </div>
          <div className="p-2 bg-bodydark2 rounded-md text-white hover:cursor-pointer hover:bg-bodydark">
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

export default DeliveriesDetail;
