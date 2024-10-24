import React, { useState } from 'react';

import LocationType from '../../types/LocationType';
import toast from 'react-hot-toast';
import appFetch from '../../utils/appFetch';

interface ContactProps {
  toggleNewModal: () => void;
}

const Location: React.FC<ContactProps> = ({ toggleNewModal }) => {
  const [location, setLocation] = useState<LocationType>({
    name: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocation((prevLocation) => ({
      ...prevLocation,
      [name]: value,
    }));
  };

  const handleSave = () => {
    fetchData();
  };

  const fetchData = async () => {
    if (location.name === '') {
      toast.error('Must provide a name');
    } else {
      setIsLoading(true);

      const response = await appFetch('/api/locations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: location.name,
        }),
      });

      if (response.ok) {
        toast.success('Location created successfully');
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
            Create Location
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
            <p>Location</p>
            <input
              type="string"
              name="name"
              value={location.name}
              onChange={handleInputChange}
              className="focus:border-b-[1px] focus:border-b-bodydark2  focus:outline-none dark:bg-boxdark w-full"
              placeholder="e.g. Houston, Texas"
            />
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

export default Location;
