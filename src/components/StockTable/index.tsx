import { useNavigate } from 'react-router-dom';
import { EmptyIconStar } from '../../images/icon';

const StockData = [
  {
    id: '3ase893lkjsd',
    InternalReference: 'TITPS',
    Name: 'Aladin',
    VariantValues: '10/02/2024 11:02:19',
    SalesPrice: 'P00002',
    Cost: 'Draft',
    OnHand: 'Draft',
    Forecasted: 'Draft',
  },
  {
    id: '3aSdfezcjsd',
    InternalReference: 'TITPS',
    Name: 'Aladin',
    VariantValues: '10/02/2024 11:02:19',
    SalesPrice: 'P00002',
    Cost: 'Draft',
    OnHand: 'Draft',
    Forecasted: 'Draft',
  },
];

const StockTable = () => {
  const navigate = useNavigate();
  const handleClick = (reference: any) => {
    navigate(`/reporting/stock/${reference}`);
  };
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                <th className="min-w-[50px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  <input type="checkbox" />
                </th>
                <th className="min-w-[220px] font-semibold py-4 px-4 font-medium text-black dark:text-white ">
                  Internal Reference
                </th>
                <th className="min-w-[100px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  Name
                </th>
                <th className="min-w-[220px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  Variant Values
                </th>
                <th className="min-w-[120px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  Sales Price
                </th>
                <th className="min-w-[120px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  Cost
                </th>
                <th className="min-w-[120px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  On Hand
                </th>
                <th className="min-w-[120px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  Forecasted
                </th>
              </tr>
            </thead>
            <tbody>
              {StockData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 1 ? 'bg-gray-2 dark:bg-meta-4' : ''
                  } hover:cursor-pointer border-b border-[#aaaaaa]`}
                >
                  <td className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark">
                    <div className="flex flex-row gap-2">
                      <input type="checkbox" />
                      <EmptyIconStar />
                    </div>
                  </td>
                  <td
                    className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark hover:underline"
                    onClick={() => handleClick(item.id)}
                  >
                    <p className="text-sm">{item.InternalReference}</p>
                  </td>
                  <td className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.Name}</p>
                  </td>
                  <td className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.VariantValues}
                    </p>
                  </td>
                  <td className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.SalesPrice}
                    </p>
                  </td>
                  <td className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.Cost}</p>
                  </td>
                  <td className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.OnHand}</p>
                  </td>
                  <td className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.Forecasted}
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

export default StockTable;
