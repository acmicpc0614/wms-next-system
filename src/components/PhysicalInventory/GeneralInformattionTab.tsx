import { useState } from 'react';

export default function GeneralInformationTab() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const Options = [
    {
      value: 'option1',
      title: 'Goods',
    },
    {
      value: 'option2',
      title: 'Service',
    },
    {
      value: 'option3',
      title: 'Combo',
    },
  ];
  return (
    <div className="flex flex-col mx-auto p-6 bg-white rounded-lg shadow dark:bg-boxdark">
      <div className="flex flex-row">
        <div className="flex flex-col w-[50%] gap-4">
          <div className="flex flex-row gap-4">
            <p className="font-semibold w-[150px]">Product Type</p>
            <div className="flex flex-row gap-4">
              {Options.map((item, idx) => (
                <label className="flex items-center" key={idx}>
                  <input
                    type="radio"
                    value={item.value}
                    checked={selectedOption === 'option1'}
                    onChange={handleChange}
                    className="form-radio h-4 w-4 text-success"
                  />
                  <span className="ml-2 font-semibold text-sm">
                    {item.title}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Track Inventory</p>
            <input type="checkbox" />
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Invoicing Policy</p>
            <div className="flex flex-col gap-6">
              <p className="">Ordered quantities</p>
              <p className="text-sm italic">Ordered quantities</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Sales Price</p>
            <p>1.00AED</p>
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Sales Taxes</p>
            <p className="rounded-full dark:bg-black bg-bodydark px-4 text-sm text-center flex items-center">
              5% AD
            </p>
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Cost</p>
            <p>0.00AED</p>
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Internal Reference</p>
            <p></p>
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Barcode</p>
            <p></p>
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Purchase Taxes</p>
            <p className="rounded-full dark:bg-black bg-bodydark px-4 text-sm text-center flex items-center">
              5%
            </p>
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Category</p>
            <p>All</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="w-full border-b-2 border-b-body">INTERNAL NODTES</p>
        <input className="dark:bg-boxdark border-2 border-body rounded-md focus:outline-none h-24" />
      </div>
    </div>
  );
}
