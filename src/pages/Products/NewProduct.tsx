import { useState } from 'react';
import CustomBtn from '../../components/CustomBtn';
import {
  BigEmptyIconStar,
  Icon272Cross,
  IconBxsCloudUpload,
  IconPushpin,
  imgGear,
} from '../../images/icon';
import {
  FaListUl,
  FaRegFileAlt,
  FaRegChartBar,
  FaCaretDown,
} from 'react-icons/fa';
import Info from '../../components/TabsComponent/Info';
import Attribute from '../../components/TabsComponent/Attribute';
import Purchase from '../../components/TabsComponent/Purchase';
import Inventory from '../../components/TabsComponent/Inventory';
import Accounting from '../../components/TabsComponent/Accounting';

const tabs = [
  { name: 'General Information', current: true },
  { name: 'Attributes & Variants', current: false },
  { name: 'Sales', current: false },
  { name: 'Purchase', current: false },
  { name: 'Inventory', current: false },
  { name: 'Accounting', current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const NewProduct = () => {
  const [activeTab, setActiveTab] = useState<string>(
    tabs.find((tab) => tab.current)?.name || '',
  );

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <CustomBtn title="New" clickedPath="/reporting/stock/newstock" />
            <div className="flex flex-col">
              <p>Product</p>
              <div className="flex flex-row items-center">
                <img src={imgGear} className="w-4 h-4" alt="gear" />
              </div>
            </div>
            <IconBxsCloudUpload />
            <Icon272Cross />
          </div>
          <div className="flex flex-row items-center">
            <div className="px-3 py-2 rounded-l-md border-2 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
              <FaListUl />
              <div className="flex flex-col">
                <p className="text-xs">Pricelists</p>
                <p className="text-xs">0 Rules</p>
              </div>
            </div>
            <div className="px-3 py-2 border-2 border-l-0 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
              <FaListUl />
              <div className="flex flex-col">
                <p className="text-xs">Go to </p>
                <p className="text-xs">Website</p>
              </div>
            </div>
            <div className="px-3 py-2 border-2 border-l-0 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
              <FaRegFileAlt />
              <div className="flex flex-col">
                <p className="text-xs">Documents </p>
                <p className="text-xs">0</p>
              </div>
            </div>
            <div className="px-3 py-2 border-2 border-l-0 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
              <FaRegChartBar />
              <div className="flex flex-col">
                <p className="text-xs">Solid </p>
                <p className="text-xs">0.00 Units</p>
              </div>
            </div>
            <div className="h-full px-3 py-2 rounded-r-md border-2 border-l-0 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
              <p>More</p>
              <FaCaretDown />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <IconPushpin />
          </div>
        </div>

        <div className="flex flex-row gap-1">
          <CustomBtn title="Update Quantity" fill={false} />
          <CustomBtn title="Replenish" fill={false} />
          <CustomBtn title="Print Labels" fill={false} />
        </div>

        <div className="flex flex-col gap-3 rounded-sm border border-stroke bg-white pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:pb-1">
          <p className="font-semibold px-5 sm:px-7.5">Product</p>
          <div className="flex flex-row gap-5 items-center h-10 px-5 sm:px-7.5">
            <BigEmptyIconStar />
            <h1 className="text-3xl">e.g.Cheese Burger</h1>
          </div>
          <div className="flex itmes-center gap-3 px-5 sm:px-7.5">
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <p>Sales</p>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <p>Purchase</p>
            </div>
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <p>Point of Sale</p>
            </div>
          </div>

          {/* Tab bar */}

          <div>
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                value={activeTab}
                onChange={(e) => handleTabClick(e.target.value)}
                className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                {tabs.map((tab) => (
                  <option key={tab.name} value={tab.name}>
                    {tab.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav aria-label="Tabs" className="-mb-px flex space-x-8 px-5 sm:px-7.5">
                  {tabs.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => handleTabClick(tab.name)}
                      aria-current={activeTab === tab.name ? 'page' : undefined}
                      className={classNames(
                        activeTab === tab.name
                          ? 'border-indigo-500 text-indigo-600'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                      )}
                    >
                      {tab.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            <div className='px-5 sm:px-7.5'>
              {activeTab === 'General Information' && <Info />}
              {activeTab === 'Attributes & Variants' && <Attribute />}
              {activeTab === 'Sales' && <p>Company content</p>}
              {activeTab === 'Purchase' && <Purchase />}
              {activeTab === 'Inventory' && <Inventory />}
              {activeTab === 'Accounting' && <Accounting />}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-1">
            <CustomBtn title="Send Message" fill={true} />
            <CustomBtn title="Log note" fill={false} />
            <CustomBtn title="Activities" fill={false} />
          </div>
          <p>
            Follow
          </p>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
