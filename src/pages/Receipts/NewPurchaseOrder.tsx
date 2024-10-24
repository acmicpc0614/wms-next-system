import { useState } from 'react';
import { EmptyIconStar, IconGear, IconPushpin } from '../../images/icon';
import SelectContact from '../../components/Select/SelectContact';
import SelectLocation from '../../components/Select/SelectLocation';
import appFetch from '../../utils/appFetch';

const NewPurchaseOrder = () => {
  const [activeTab, setActiveTab] = useState('Operations');
  const [selectedCustomer, setSelectedCustomer] = useState<string>('');
  const [customers, setCustomers] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [locations, setLocations] = useState<string[]>([]);

  const fetchLocation = async () => {
    try {
      const responseLocations = await appFetch('/api/locations', {
        method: 'GET',
      });

      const locationArray: string[] = responseLocations
        .slice(0, 5)
        .map((location: { name: any }) => location.name);
      setLocations(locationArray);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const fetchCustomer = async () => {
    try {
      const responseCustomers = await appFetch('/api/customers', {
        method: 'GET',
      });

      const customerArray: string[] = responseCustomers
        .slice(0, 5)
        .map((customer: { name: any }) => customer.name);
      setCustomers(customerArray);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleChangeCustomer = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedCustomer(event.target.value);
  };

  const handleCustomer = (str: string) => {
    setSelectedCustomer(str);
  };

  const handleFocusCustomer = () => {
    fetchCustomer();
  };

  const handleChangeLocation = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedLocation(event.target.value);
  };

  const handleLocation = (str: string) => {
    setSelectedLocation(str);
  };

  const handleFocusLocation = () => {
    fetchLocation();
  };

  return (
    <>
      <div className="flex flex-col gap-4 flex-1 h-full">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row text-center items-center gap-2 font-bold">
              New Purchase Order
              <IconGear />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <IconPushpin />
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 flex-1">
          <div className="flex flex-row gap-5 items-center h-10 mb-5">
            <EmptyIconStar />
            <h1 className="text-3xl font-semibold">New Purchase Order</h1>
          </div>
          <div className="flex md:flex-row gap-5 flex-col ">
            <div className="flex flex-row gap-10 md:w-[50%] justify-between pr-10">
              <div className="flex flex-col gap-2">
                <p>Receive From</p>
                <p>Destination Location</p>
              </div>
              <div className="flex flex-col gap-2 w-[70%]">
                <SelectContact
                  letters={customers}
                  value={selectedCustomer}
                  handleChange={handleChangeCustomer}
                  handleChangeString={handleCustomer}
                  handleFocus={handleFocusCustomer}
                />
                <SelectLocation
                  letters={locations}
                  value={selectedLocation}
                  handleChange={handleChangeLocation}
                  handleChangeString={handleLocation}
                  handleFocus={handleFocusLocation}
                />
              </div>
            </div>
            <div className="flex flex-row gap-10 md:w-[50%] justify-between pr-10">
              <div className="flex flex-col gap-2">
                <p>Scheduled Data</p>
                <p>Source Document</p>
              </div>
              <div className="flex flex-col gap-2 w-[70%]">
                <input
                  type="date"
                  className="focus:border-b-[1px] focus:border-b-bodydark2  focus:outline-none dark:bg-boxdark"
                  value={'2024-10-24'} // Correct format: YYYY-MM-DD
                />
                <input
                  type="string"
                  className="focus:border-b-[1px] focus:border-b-bodydark2  focus:outline-none dark:bg-boxdark"
                  placeholder="e.g. PC00032"
                />
              </div>
            </div>
          </div>

          {/* Tab bar */}
          <div className="mb-4 mt-8">
            <ul className="flex border-b">
              {['Operations'].map((tab) => (
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
            {/* <div className="">
              {activeTab === 'Operations' && <ReceiptDetailOperationTable />}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPurchaseOrder;
