import { ScrapData } from '../../store/StaticData';
import EmtpyScrapTable from './EmtpyScrapTable';

const ScrapTable = () => {
  const handleClick = (reference: any) => {
    console.log(reference);
  };
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          {ScrapData.length > 0 ? (
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                  <th className="py-4 px-4 font-semibold text-black dark:text-white">
                    <input type="checkbox" />
                  </th>
                  <th className="py-4 px-4 font-semibold text-black dark:text-white xl:pl-11 min-w-[250px]">
                    Reference
                  </th>
                  <th className="py-4 px-4 font-semibold text-black dark:text-white min-w-[150px]">
                    Date
                  </th>
                  <th className="py-4 px-4 font-semibold text-black dark:text-white min-w-[150px]">
                    Product
                  </th>
                  <th className="py-4 px-4 font-semibold text-black dark:text-white min-w-[50px]">
                    Quantity Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {ScrapData.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 1 ? 'bg-gray-2 dark:bg-meta-4' : ''
                    } hover:cursor-pointer border-b border-[#aaaaaa]`}
                  >
                    <td className=" py-2 px-4  text-sm dark:border-strokedark">
                      <div className="flex flex-row gap-2">
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td
                      className=" py-2 px-4  text-sm pl-9 dark:border-strokedark xl:pl-11 hover:underline"
                      onClick={() => handleClick(item.id)}
                    >
                      <p className="text-sm"> {item.Reference}</p>
                    </td>
                    <td className=" py-2 px-4  text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">{item.Date}</p>
                    </td>
                    <td className=" py-2 px-4  text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {item.Product}
                      </p>
                    </td>
                    <td className=" py-2 px-4  text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {item.QuantityStatus}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <EmtpyScrapTable />
          )}
        </div>
      </div>
    </>
  );
};

export default ScrapTable;
