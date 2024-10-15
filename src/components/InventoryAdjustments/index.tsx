import {
  EmptyIconStar,
  Icon272Cross,
  IconArrowRotateLeft,
  imgSavebtn,
} from '../../images/icon';
import { InventoryData, ManufactoringsData } from '../../store/StaticData';
import { getBaseColor } from '../../utils/Actions';
import { imgclock } from '../../images/icon';

const InventoryAdjustments = () => {
  const handleClick = (reference: any) => {
    console.log(reference);
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
                <th className="py-4 px-4 font-semibold text-black dark:text-white xl:pl-11 min-w-[250px]">
                  Product
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white min-w-[150px]">
                  On Hand Queen
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white min-w-[150px]">
                  Counted Quantity
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white min-w-[50px]">
                  Difference
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Schedule Data
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  User
                </th>
                <th className="py-4 px-4 font-semibold min-w-[200px] text-black dark:text-white"></th>
              </tr>
            </thead>
            <tbody>
              {InventoryData.map((item, idx) => (
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
                    <p className="text-sm">{item.Product}</p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.OnHandQueen}
                    </p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.CountedQuantity}
                    </p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.Difference}
                    </p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark">
                    <p className="text-success font-bold dark:text-white">
                      {item.ScheduledData}
                    </p>
                  </td>
                  <td className=" py-2 px-4 text-sm dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.User}</p>
                  </td>
                  <td className="flex flex-row py-2 px-4 text-sm dark:border-strokedark gap-4">
                    <div className="flex flex-row gap-1">
                      <IconArrowRotateLeft />
                      <p className="text-black dark:text-white">Return</p>
                    </div>
                    <div className="flex flex-row gap-1">
                      <img src={imgSavebtn} className="w-4 h-4" alt="save" />
                      <p className="text-black dark:text-white">Save</p>
                    </div>
                    <div className="flex flex-row gap-1">
                      <Icon272Cross />
                      <p className="text-black dark:text-white">Clear</p>
                    </div>
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

export default InventoryAdjustments;
