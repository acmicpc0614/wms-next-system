import { useState } from 'react';
import TopSearchBar from '../../components/TopSearchBar';
import { IconSearch, IconUser } from '../../images/icon';

const NewProductCategory = () => {
  const buttons = [{ label: 'New', path: 'new' }];
  const [activeTab, setActiveTab] = useState('General');
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="New Operations Types"
          btns={buttons}
          pagination={true}
          tools={false}
        />
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <p className="text-md">Category</p>
          <p className="text-3xl">All</p>
          <p className="text-md">Parent Category</p>
          <div className="flex flex-row gap-5">
            <input
              type="string"
              className="border-b-[1px] border-b-bodydark2 focus:border-b-success focus:outline-none dark:bg-boxdark text-3xl "
              placeholder="e.g. Receptions"
            />
          </div>

          {/* Tab bar */}
          <div className="my-4">
            <ul className="flex border-b">
              {['General'].map((tab) => (
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
              {activeTab === 'General' && <NewCategoryTab />}
            </div>
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
          </div>
          <div className="flex flex-row gap-3">
            <IconSearch />
            <IconUser />
            <p className="text-sm text-success font-bold">Following</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProductCategory;

const NewCategoryTab = () => {
  return (
    <div className="flex flex-col mx-auto p-6 bg-white rounded-lg shadow dark:bg-boxdark">
      <div className="flex flex-row">
        <div className="flex flex-col w-[50%] gap-4">
          <h3 className="text-lg border-b-2 border-bodydark1 mt-4 mr-4">
            LOGISTICS
          </h3>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold">Force Removal Strategy</p>
          </div>
          <h3 className="text-lg border-b-2 border-bodydark1 mt-4 mr-4">
            ACCOUNT PROPERTIES
          </h3>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Income Account</p>
            <p className="font-semibold ">50001 Sales Account</p>
          </div>

          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Expense Account</p>
            <p className="font-semibold ">
              40001 Cost of Goods Sold in Trading
            </p>
          </div>

          <div className="flex flex-row gap-4">
            <p className="font-semibold w-[150px]">Downpayment Account</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg border-b-2 border-bodydark1 mt-4 mr-4">
            INENTORY VALUATION
          </h3>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Costing Method</p>
            <p>Standard Price</p>
          </div>
        </div>
      </div>
    </div>
  );
};
