import { DeliveryMethodsData } from '../../store/StaticData';

const DeliveryMethodTable = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                <th className="min-w-[50px] py-4 px-4 font-semibold text-black dark:text-white">
                  <input type="checkbox" />
                </th>
                <th className="min-w-[320px] py-4 px-4 font-semibold text-black dark:text-white xl:pl-11">
                  Delivery Method
                </th>
                <th className="min-w-[200px] py-4 px-4 font-semibold text-black dark:text-white">
                  Provider
                </th>
                <th className="min-w-[50px] py-4 px-4 font-semibold text-black dark:text-white">
                  Is Published
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Max Weight
                </th>
              </tr>
            </thead>
            <tbody>
              {DeliveryMethodsData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 1 ? 'bg-gray-2 dark:bg-meta-4' : ''
                  } hover:cursor-pointer border-b border-[#aaaaaa]`}
                >
                  <td className=" py-2 px-4 text-sm dark:border-strokedark">
                    <div className="flex flex-row gap-2">
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td className=" py-2 px-4 text-sm pl-9 dark:border-strokedark xl:pl-11 hover:underline">
                    <p className="text-sm">{item.Method}</p>
                  </td>
                  <td className=" py-2 px-4 text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.Provider}
                    </p>
                  </td>
                  <td className=" py-2 px-4 text-sm dark:border-strokedark">
                    {item.IsPublished ? (
                      <input type="checkbox" checked={true} />
                    ) : (
                      <input type="checkbox" />
                    )}
                  </td>
                  <td className=" py-2 px-4 text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.MaxWeight}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DeliveryMethodTable;
