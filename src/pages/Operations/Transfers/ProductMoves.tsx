import TopSearchBar from '../../../components/TopSearchBar';
import { getBaseColor } from '../../../utils/Actions';
import { DONE } from '../../../utils/Consts';

const ProductMoves = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="Product Moves"
          btns={[]}
          pagination={true}
          tools={false}
        />
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                  <th className=" py-4 px-4 font-semibold text-black dark:text-white">
                    <input type="checkbox" />
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-semibold text-black dark:text-white xl:pl-11">
                    Date
                  </th>
                  <th className=" py-4 px-4 font-semibold text-black dark:text-white xl:pl-11">
                    Reference
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-semibold text-black dark:text-white">
                    Product
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-semibold text-black dark:text-white">
                    From
                  </th>
                  <th className="py-4 px-4 font-semibold text-black dark:text-white">
                    To
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-semibold text-black dark:text-white">
                    Quantity
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-semibold text-black dark:text-white">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {ProductMovesData.map((item, idx) => (
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
                      <p className="text-sm">{item.Date}</p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p className="text-black text-sm dark:text-white">
                        {item.Reference}
                      </p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p className="text-black text-sm dark:text-white">
                        {item.Product}
                      </p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p className="text-black text-sm dark:text-white">
                        {item.From}
                      </p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p className="text-black text-sm dark:text-white">
                        {item.To}
                      </p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p className="text-black text-sm dark:text-white text-center">
                        {item.Quantity}
                      </p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p
                        className={`inline-flex rounded-ful py-1 px-3 text-sm font-medium rounded-full ${getBaseColor(
                          { value: item.Status },
                        )}`}
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
      </div>
    </>
  );
};
export default ProductMoves;

const ProductMovesData = [
  {
    Date: '10/09/2024 13:53:23',
    Reference: 'WH/MO/00002',
    Product: 'Black embroidered t-shirt',
    From: 'Virtual Locations/Production',
    To: 'WH/Stock',
    Quantity: 20,
    Status: DONE,
  },
];
