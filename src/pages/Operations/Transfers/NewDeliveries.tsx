import { useState } from 'react';
import CustomBtn from '../../../components/CustomBtn';
import {
  EmptyIconStar,
  Icon272Cross,
  IconBxsCloudUpload,
  IconGear,
  IconPushpin,
  IconSearch,
  IconThMenu,
  IconUser,
} from '../../../images/icon';

const NewDeliveries = () => {
  const [activeTab, setActiveTab] = useState('Operations');
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <CustomBtn title="New" clickedPath="/operations/deliveries/new" />
            <div className="flex flex-col">
              <p>Deliveries</p>
              <div className="flex flex-row items-center">
                <IconGear />
              </div>
            </div>
            <IconBxsCloudUpload />
            <Icon272Cross />
          </div>
          <div className="flex flex-row items-center">
            <div className="px-3 py-2 rounded-md border-2 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
              <IconThMenu />
              Moves
            </div>
          </div>
          <div className="flex flex-row items-center">
            <IconPushpin />
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <CustomBtn title="Mark as Todo" fill={true} />
          <CustomBtn title="Validate" />
          <CustomBtn title="Return" />
          <CustomBtn title="Cancel" />
        </div>
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="flex flex-row gap-5 items-center h-10">
            <EmptyIconStar />
            <h1 className="text-3xl">New Delivery</h1>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-row gap-10 w-[50%]">
              <div className="flex flex-col gap-2">
                <p>Delivery Address</p>
                <p>Operation Type</p>
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="string"
                  className="border-b-[1px] border-b-bodydark2 focus:border-b-success focus:outline-none dark:bg-boxdark"
                  placeholder="e.g. Lumber Inc"
                />
                <p>Time: Deliveries</p>
              </div>
            </div>
            <div className="flex flex-row gap-10 w-[50%]">
              <div className="flex flex-col gap-2">
                <p>Scheduled Data</p>
                <p>Product Availability</p>
                <p>Source Document</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>10/10/2024 10:07:10</p>
                <p className="text-success">Available</p>
                <p>Clothes Shop/0001</p>
              </div>
            </div>
          </div>

          {/* Tab bar */}
          <div className="my-4">
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
                    {tab.charAt(0).toUpperCase() +
                      tab.slice(1).replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              {activeTab === 'Operations' && <DeliveryDetailOperationTable />}
              {activeTab === 'Additional Info' && (
                <DeliveryDetailAdditionalInfo />
              )}
              {activeTab === 'Note' && <p>Activities content</p>}
            </div>
          </div>
          <div className="flex justify-between items-center">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDeliveries;

const DeliveryDetailOperationTable = () => {
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
              {NewDeliveriesData.length > 0 ? (
                NewDeliveriesData.map((item, idx) => (
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

const DeliveryDetailAdditionalInfo = () => {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-4 w-[50%]">
        <p className="font-bold underline">SHIPPING INFORMATION</p>
        <p>Carrier</p>
        <p>Tracking Reference</p>
        <p>Weight</p>
        <p>Weight for shipping</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold underline">OTHER INFORMATION</p>
        <p>Shipping Policy</p>
        <p>Responsible</p>
        <p>Sales Order</p>
        <p>Project</p>
      </div>
    </div>
  );
};

interface NewDeliveriesDataType {
  Reference: string;
  Start: string; // Adjust the type as necessary (e.g., Date if applicable)
}

const NewDeliveriesData: NewDeliveriesDataType[] = [];
