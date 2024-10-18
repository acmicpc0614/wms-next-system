import { useState } from 'react';
import TopSearchBar from '../../components/TopSearchBar';

const NewOperationsTypes = () => {
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
          <div className="flex flex-row gap-5 items-center h-10">
            <p className="text-md">Operation Type</p>
          </div>
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
              {activeTab === 'General' && <NewOperationGeneralTab />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewOperationsTypes;

const NewOperationGeneralTab = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const Options = [
    {
      value: 'option1',
      title: 'At Confirmation',
    },
    {
      value: 'option2',
      title: 'Manually',
    },
    {
      value: 'option3',
      title: 'Before scheduled date ',
    },
  ];
  return (
    <div className="flex flex-col mx-auto p-6 bg-white rounded-lg shadow dark:bg-boxdark">
      <div className="flex flex-row">
        <div className="flex flex-col w-[50%] gap-4">
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Type of Operation</p>
          </div>

          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Sequence Prefix</p>
          </div>

          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">arcode</p>
          </div>

          <div className="flex flex-row gap-4">
            <p className="font-semibold w-[150px]">Product Type</p>
            <div className="flex flex-col gap-4">
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
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Create Backorder</p>
            <p>Ask</p>
          </div>
        </div>
      </div>
    </div>
  );
};
