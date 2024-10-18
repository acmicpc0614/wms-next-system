import { useNavigate } from 'react-router-dom';
import { EmptyIconStar } from '../../images/icon';
import { ManufactoringsData } from '../../store/StaticData';
import { getBaseColor } from '../../utils/Actions';
import { imgclock } from '../../images/icon';

const ManufacturingTable = () => {
  const navigate = useNavigate();
  const handleClick = (reference: any) => {
    console.log(reference);
    navigate(`/operations/manufacturings/detail/${reference}`);
  };
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  <input type="checkbox" />
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white xl:pl-11">
                  Reference
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Start
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Product
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Next Activity
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Source
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Component Status
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Quantity
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  State
                </th>
              </tr>
            </thead>
            <tbody>
              {ManufactoringsData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 1 ? 'bg-gray-2 dark:bg-meta-4' : ''
                  } hover:cursor-pointer border-b border-[#aaaaaa]`}
                >
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <div className="flex flex-row gap-2">
                      <input type="checkbox" />
                      <EmptyIconStar />
                    </div>
                  </td>
                  <td
                    className=" py-2 px-4  text-sm pl-9 dark:border-strokedark xl:pl-11 hover:underline"
                    onClick={() => handleClick(item.id)}
                  >
                    <p className="text-sm">{item.Reference}</p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.Start}</p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.Product}</p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      <img
                        src={imgclock}
                        alt="clock"
                        className="w-5 h-5 text-[#ff0000]"
                      />
                    </p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.Source}</p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-success font-bold dark:text-white">
                      {item.ComponentStatus}
                    </p>
                  </td>
                  <td className=" py-2 px-4 text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.Quantity}
                    </p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p
                      className={`inline-flex rounded-ful py-1 px-3 text-sm font-medium rounded-full ${getBaseColor(
                        { value: item.State },
                      )}`}
                    >
                      {item.State}
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

export default ManufacturingTable;
