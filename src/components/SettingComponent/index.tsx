import { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';
import SectionForSetting from './SectionForSetting';
import { IconUser } from '../../images/icon';

type SettingsSectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const SettingsSection = ({
  title,
  description,
  children,
}: SettingsSectionProps) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-3">{description}</p>
    {children}
  </div>
);

export default function SettingContent() {
  const [pickingPolicy, setPickingPolicy] = useState('asap');
  const [inventoryDate, setInventoryDate] = useState('31');
  const [inventoryMonth, setInventoryMonth] = useState('December');

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <h2 className="text-2xl font-bold mb-6">Operations</h2>

        <div className="flex flex-row gap-4 w-full">
          <div className="flex flex-col gap-4 w-[50%]">
            {SettingSectionData.map((item, idx) => (
              <SectionForSetting
                key={idx}
                isCheckbox={item.isCheckbox}
                title={item.title}
                icon={item.icon}
                content={item.content}
                action={item.action}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {SettingSectionData.map((item, idx) => (
              <SectionForSetting
                key={idx}
                isCheckbox={item.isCheckbox}
                title={item.title}
                icon={item.icon}
                content={item.content}
                action={item.action}
              />
            ))}
          </div>
        </div>

        {/* <SettingsSection
          title="Annual Inventory Day and Month"
          description="Day and month that annual inventory counts should occur"
        >
          <div className="flex gap-4">
            <select
              value={inventoryDate}
              onChange={(e) => setInventoryDate(e.target.value)}
              className="w-1/2 p-2 border rounded"
            >
              {[...Array(31)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              value={inventoryMonth}
              onChange={(e) => setInventoryMonth(e.target.value)}
              className="w-1/2 p-2 border rounded"
            >
              {[
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </SettingsSection> */}

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Barcode</h3>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="barcodeScanner" className="mr-2" />
            <label htmlFor="barcodeScanner" className="text-sm">
              Barcode Scanner
            </label>
            <Info className="w-4 h-4 text-gray-400 ml-2" />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="showQuantity" className="mr-2" />
            <label htmlFor="showQuantity" className="text-sm">
              Show Quantity to Count
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

const SettingSectionData = [
  {
    isCheckbox: true,
    title: 'Packages',
    icon: <IconUser />,
    content: 'Put your products in packs (e.g. parcels, boxes) and track them',
    action: undefined,
  },
  {
    isCheckbox: true,
    title: 'Warnings',
    icon: <IconUser />,
    content: 'Get informative or blocking warning on partners',
    action: undefined,
  },
  {
    isCheckbox: true,
    title: 'Quality',
    icon: <IconUser />,
    content: 'Add quality checks to your transfer operations',
    action: undefined,
  },
  {
    isCheckbox: true,
    title: 'Reception Report',
    icon: <IconUser />,
    content: 'View and allocate received quantities',
    action: undefined,
  },
];
