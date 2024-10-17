import { useState } from 'react';
import CustomBtn from '../../components/CustomBtn';
import {
  BigEmptyIconStar,
  Icon272Cross,
  IconBxsCloudUpload,
  IconGear,
  IconPushpin,
  IconSearch,
  IconUser,
} from '../../images/icon';
import {
  FaListUl,
  FaRegFileAlt,
  FaRegChartBar,
  FaCaretDown,
} from 'react-icons/fa';
import Info from '../../components/TabsComponent/Info';
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

const NewProduct = () => {
  const [activeTab, setActiveTab] = useState<string>(
    tabs.find((tab) => tab.current)?.name || '',
  );

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <CustomBtn title="New" clickedPath="/reporting/stock/newstock" />
            <div className="flex flex-col">
              <p>Product Variants</p>
              <div className="flex flex-row items-center">
                <IconGear />
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
          <CustomBtn title="Replenish" fill={false} />
          <CustomBtn title="Print Labels" fill={false} />
        </div>

        <div className="flex flex-col gap-3 rounded-sm border border-stroke bg-white pt-6 pb-2.5 shadow-default dark:border-strokedark px-5 sm:px-7.5 dark:bg-boxdark xl:pb-1">
          <p className="font-semibold">Product</p>
          <div className="flex flex-row gap-5 items-center h-10">
            <BigEmptyIconStar />
            <h1 className="text-3xl">e.g.Cheese Burger</h1>
          </div>
          <div className="flex itmes-center gap-3">
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

          <div className="my-4">
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
                    {tab.charAt(0).toUpperCase() +
                      tab.slice(1).replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              {activeTab === 'General Information' && <Info />}
              {activeTab === 'Sales' && <p>Company content</p>}
              {activeTab === 'Purchase' && <Purchase />}
              {activeTab === 'Inventory' && <Inventory />}
              {activeTab === 'Accounting' && <Accounting />}
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
    </>
  );
};

export default NewProduct;
