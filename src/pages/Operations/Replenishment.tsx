import TopSearchBar from '../../components/TopSearchBar';
import { IconAlarmOff } from '../../images/icon';

export default function Replenishment() {
  const buttons = [{ label: 'New', path: 'new' }];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="Replenishment"
          btns={buttons}
          pagination={true}
          tools={true}
        />
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                  <th className="min-w-[50px] py-4 px-4 font-semibold text-black dark:text-white">
                    <input type="checkbox" />
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-semibold text-black dark:text-white xl:pl-11">
                    Product
                  </th>
                  <th className="min-w-[100px] py-4 px-4 font-semibold text-black dark:text-white">
                    On Hand
                  </th>
                  <th className="min-w-[220px] py-4 px-4 font-semibold text-black dark:text-white">
                    Forecast
                  </th>
                  <th className="py-4 px-4 font-semibold text-black dark:text-white">
                    Route
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-semibold text-black dark:text-white">
                    Min
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-semibold text-black dark:text-white">
                    Max
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-semibold text-black dark:text-white">
                    To Order
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-semibold text-black dark:text-white"></th>
                </tr>
              </thead>
              <tbody>
                {RepData.map((item, idx) => (
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
                      <p className="text-sm">{item.Product}</p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {item.OnHand}
                      </p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {item.Forecast}
                      </p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">{item.Route}</p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">{item.Min}</p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">{item.Max}</p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {item.ToOrder}
                      </p>
                    </td>
                    <td className=" py-2 px-4 text-sm dark:border-strokedark flex flex-row items-center gap-3">
                      <IconAlarmOff />
                      <p className="text-black dark:text-white">Snooze</p>
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
}

const RepData = [
  {
    Product: 'Green Hood',
    OnHand: 0,
    Forecast: 10,
    Route: 'Buy',
    Min: 10,
    Max: 10,
    ToOrder: 0,
  },
];
