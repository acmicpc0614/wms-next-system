import { useNavigate } from 'react-router-dom';
import { getBaseColor } from '../../utils/Actions';

const MovesHistoryData = [
  {
    id: '3ase893lkjsd',
    Date: '10/02/2024 11:02:19',
    Reference: 'TITPS',
    Product: 'Aladin',
    From: 'P00002',
    To: 'Draft',
    Quantity: '1.00',
    Status: 'Draft',
  },
  {
    id: '3aSdfezcjsd',
    Date: '10/02/2024 11:02:19',
    Reference: 'TITPS',
    Product: 'Aladin',
    From: 'P00002',
    To: 'Draft',
    Quantity: '36.00',
    Status: 'Draft',
  },
];

const MovesHistoryTable = () => {
  const navigate = useNavigate();
  const handleClick = (reference: any) => {
    navigate(`/reporting/moveshisotry/${reference}`);
  };
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                <th className="w-[30px] py-4 px-4">
                  <input type="checkbox" />
                </th>
                <th className="min-w-[220px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  Date
                </th>
                <th className="min-w-[100px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  Reference
                </th>
                <th className="min-w-[220px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  Product
                </th>
                <th className="min-w-[120px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  From
                </th>
                <th className="min-w-[120px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  To
                </th>
                <th className="min-w-[120px] font-semibold py-4 px-4 font-medium text-black text-right dark:text-white">
                  Quantity
                </th>
                <th className="min-w-[120px] font-semibold py-4 px-4 font-medium text-black dark:text-white">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {MovesHistoryData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 1 ? 'bg-gray-2 dark:bg-meta-4' : ''
                  } hover:cursor-pointer border-b border-[#aaaaaa]`}
                >
                  <td className="py-2 px-4 dark:border-strokedark">
                    <div className="flex flex-row gap-2">
                      <input type="checkbox" />
                    </div>
                  </td>
                  <td
                    className="py-2 px-4 dark:border-strokedark hover:underline"
                    onClick={() => handleClick(item.id)}
                  >
                    <p className="text-sm text-gray-900">{item.Date}</p>
                  </td>
                  <td className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.Reference}
                    </p>
                  </td>
                  <td className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.Product}</p>
                  </td>
                  <td className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.From}</p>
                  </td>
                  <td className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{item.To}</p>
                  </td>
                  <td className="text-sm text-right text-gray-900 py-2 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {item.Quantity}
                    </p>
                  </td>
                  <td className="text-sm text-gray-900 py-2 px-4 dark:border-strokedark">
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
    </>
  );
};

export default MovesHistoryTable;
