import { IconFilter } from '../../../images/icon';

const ManufactoringsOverview = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <div className="flex flex-row justify-between my-2 w-full">
          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row gap-2 items-center">
              <div className="h-8 px-3 items-center flex bg-bodydark2 rounded-md text-white hover:cursor-pointer hover:bg-bodydark dark:bg-boxdark dark:border-[1px] dark:border-bodydark2">
                Print
              </div>
              <div className="h-8 px-3 items-center flex bg-bodydark2 rounded-md text-white hover:cursor-pointer hover:bg-bodydark dark:bg-boxdark dark:border-[1px] dark:border-bodydark2">
                Unfold
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-success">
                Manufacturings / WH/MO/0002
              </p>
              <p className="text-sm ">MO Overview</p>
            </div>
          </div>

          <div className="relative items-center flex">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4">
              <IconFilter />
            </div>
            <input
              type="search"
              placeholder="Display"
              className="pl-8 pr-2 py-1 border border-bodydark2 rounded-md w-80 dark:bg-boxdark bg-stroke focus:outline-none"
            />
          </div>
          <div className="flex flex-row gap-6 items-center">
            {
              <div className="flex items-center space-x-2">
                <button
                  className="p-1 hover:bg-gray-200 rounded"
                  aria-label="Previous page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <span className="text-sm">14/14</span>
                <button
                  className="p-1 hover:bg-gray-200 rounded"
                  aria-label="Next page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            }
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                  <th className="py-4 px-4 font-semibold text-right text-black dark:text-white min-w-[300px]"></th>
                  <th className="py-4 px-4 font-semibold text-right text-black dark:text-white xl:pl-11">
                    Quantity
                  </th>
                  <th className="py-4 px-4 font-semibold text-right text-black dark:text-white">
                    Unit Cost
                  </th>
                  <th className="py-4 px-4 font-semibold text-right text-black dark:text-white">
                    MO Cost
                  </th>
                  <th className="py-4 px-4 font-semibold text-right text-black dark:text-white">
                    Real Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {OverViewData.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 1 ? 'bg-gray-2 dark:bg-meta-4' : ''
                    } hover:cursor-pointer border-b border-[#aaaaaa]`}
                  >
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p className="text-sm text-success font-semibold">
                        Black embroidered t-shirt
                      </p>
                    </td>
                    <td className=" py-2 px-4 text-right text-sm pl-9 dark:border-strokedark xl:pl-11 hover:underline">
                      <p className="text-sm">{item.Quantity}</p>
                    </td>
                    <td className=" py-2 px-4 text-right text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {item.UnitCost} AED
                      </p>
                    </td>
                    <td className=" py-2 px-4 text-right text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {item.MOCost} AED
                      </p>
                    </td>
                    <td className=" py-2 px-4 text-right text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {item.RealCost} AED
                      </p>
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-2 dark:bg-meta-4 hover:cursor-pointer">
                  <td className=" py-2 px-4  text-sm dark:border-strokedark"></td>
                  <td className=" py-2 px-4  text-sm pl-9 dark:border-strokedark xl:pl-11 hover:underline"></td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white text-right">
                      Unit Cost
                    </p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white text-right">
                      0.00 AED
                    </p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white text-right">
                      0.00 AED
                    </p>
                  </td>
                </tr>
                <tr className="bg-gray-2 dark:bg-meta-4 hover:cursor-pointer">
                  <td className=" py-2 px-4  text-sm dark:border-strokedark"></td>
                  <td className=" py-2 px-4  text-sm pl-9 dark:border-strokedark xl:pl-11 hover:underline"></td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white text-right">
                      Total Cost of Components
                    </p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white text-right">
                      0.00 AED
                    </p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white text-right">
                      0.00 AED
                    </p>
                  </td>
                </tr>
                <tr className="bg-gray-2 dark:bg-meta-4 hover:cursor-pointer">
                  <td className=" py-2 px-4  text-sm dark:border-strokedark"></td>
                  <td className=" py-2 px-4  text-sm pl-9 dark:border-strokedark xl:pl-11 hover:underline"></td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white text-right">
                      Cost of Components per Unit
                    </p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white text-right">
                      0.00 AED
                    </p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white text-right">
                      0.00 AED
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManufactoringsOverview;

const OverViewData = [
  {
    Quantity: 20.0,
    UnitCost: 22.5,
    MOCost: 0,
    RealCost: 0,
  },
];
