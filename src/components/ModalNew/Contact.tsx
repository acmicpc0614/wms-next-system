import React, { useState } from 'react';

import CustomerType from '../../types/CustomerType';
import toast from 'react-hot-toast';
import appFetch from '../../utils/appFetch';

interface ContactProps {
  toggleNewModal: () => void;
}

const Contact: React.FC<ContactProps> = ({ toggleNewModal }) => {
  const [customer, setCustomer] = useState<CustomerType>({
    name: '',
    email: '',
    number: '',
    address: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
  };

  const handleSave = () => {
    fetchData();
  };

  const fetchData = async () => {
    if (customer.name === '') {
      toast.error('Must provide a name');
    } else {
      setIsLoading(true);

      const response = await appFetch('/api/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: customer.name,
          email: customer.email,
          address: customer.address,
          number: customer.number,
        }),
      });

      if (response.ok) {
        toast.success('Contact created successfully');
      } else {
        console.error('Error fetching data:', response);
      }

      setIsLoading(false);
      toggleNewModal();
    }
  };

  return (
    <div className="fixed left-0 top-0 z-999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5">
      <div className="flex flex-col items-center justify-between w-full max-w-[50%] rounded-lg bg-white text-center dark:bg-boxdark">
        <div className="flex items-center justify-between w-full px-4 py-3">
          <h3 className="pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
            Create Contact
          </h3>
          <button
            type="button"
            onClick={toggleNewModal}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <hr className="border-t border-gray-300 w-full mx-auto" />
        {isLoading ? (
          <div className="flex items-center justify-center py-10">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
          </div>
        ) : (
          <div className="flex md:flex-row gap-5 flex-col w-full px-5 py-10 ">
            <div className="flex flex-row gap-10 md:w-[50%] justify-between pr-10">
              <div className="flex flex-col gap-5 w-[50%]">
                <p>Name</p>
                <p>Email</p>
              </div>
              <div className="flex flex-col gap-5 w-[50%]">
                <input
                  type="string"
                  name="name"
                  value={customer.name}
                  onChange={handleInputChange}
                  className="focus:border-b-[1px] focus:border-b-bodydark2  focus:outline-none dark:bg-boxdark"
                  placeholder="e.g. Majed"
                />
                <input
                  type="string"
                  name="email"
                  value={customer.email}
                  onChange={handleInputChange}
                  className="focus:border-b-[1px] focus:border-b-bodydark2  focus:outline-none dark:bg-boxdark"
                  placeholder="e.g. Majed@gmail.com"
                />
              </div>
            </div>
            <div className="flex flex-row gap-10 md:w-[50%] justify-between pr-10">
              <div className="flex flex-col gap-5 w-[50%]">
                <p>Number</p>
                <p>Address</p>
              </div>
              <div className="flex flex-col gap-5 w-[50%]">
                <input
                  type="string"
                  name="number"
                  value={customer.number}
                  onChange={handleInputChange}
                  className="focus:border-b-[1px] focus:border-b-bodydark2  focus:outline-none dark:bg-boxdark"
                  placeholder="e.g. 123456789"
                />
                <input
                  type="string"
                  name="address"
                  value={customer.address}
                  onChange={handleInputChange}
                  className="focus:border-b-[1px] focus:border-b-bodydark2  focus:outline-none dark:bg-boxdark"
                  placeholder="e.g. Dubai"
                />
              </div>
            </div>
          </div>
        )}
        <hr className="border-t border-gray-300 w-full mx-auto" />
        <div className="flex gap-x-4 w-full px-4 py-3">
          <button
            onClick={handleSave}
            className="block px-5 rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
          >
            Save & Close
          </button>
          <button
            onClick={toggleNewModal}
            className="block px-5 rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
