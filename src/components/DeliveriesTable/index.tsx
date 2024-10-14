import { useNavigate } from 'react-router-dom';
import { EmptyIconStar } from '../../images/icon';
import { DeliveriesData } from '../../store/StaticData';

const DeliveriesTable = () => {
  const navigate = useNavigate();
  const handleClick = (reference: any) => {
    navigate(`/operations/deliveries/detail/${reference}`);
  };
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                <th className="min-w-[50px] py-4 px-4 font-medium text-black dark:text-white">
                  <input type="checkbox" />
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Reference
                </th>
                <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                  Contact
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                  Scheduled Data
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Source Document
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {DeliveriesData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 1 ? 'bg-gray-2 dark:bg-meta-4' : ''
                  } hover:cursor-pointer border-b border-[#aaaaaa]`}
                >
                  <td className=" py-2 px-4 dark:border-strokedark">
                    <div className="flex flex-row gap-2">
                      <input type="checkbox" />
                      <EmptyIconStar />
                    </div>
                  </td>
                  <td
                    className=" py-2 px-4 pl-9 dark:border-strokedark xl:pl-11 hover:underline"
                    onClick={() => handleClick(item.id)}
                  >
                    <p className="text-sm">{item.Reference}</p>
                  </td>
                  <td className=" py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.Contact}</p>
                  </td>
                  <td className=" py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.ScheduledData}
                    </p>
                  </td>
                  <td className=" py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.SourceDoc}
                    </p>
                  </td>
                  <td className=" py-2 px-4 dark:border-strokedark">
                    <p
                      className={`inline-flex rounded-ful py-1 px-3 text-sm font-medium rounded-full ${
                        item.Status === 'Draft'
                          ? 'bg-bodydark1 text-boxdark-2'
                          : item.Status === 'Ready'
                          ? 'bg-primary text-white'
                          : 'bg-success text-white'
                      }`}
                    >
                      {item.Status}
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

export default DeliveriesTable;
