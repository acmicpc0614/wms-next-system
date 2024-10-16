import { AttributeData } from '../../store/StaticData';

const AttributeTable = () => {
  return (
    <>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                <th className="py-4 px-4 w-[50px] font-semibold text-black dark:text-white">
                  <input type="checkbox" />
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Attribute
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Display Type
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  Variabt Creation
                </th>
                <th className="py-4 px-4 font-semibold text-black dark:text-white">
                  eCommerce Filter Visibility
                </th>
              </tr>
            </thead>
            <tbody>
              {AttributeData.map((item, idx) => (
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
                  <td className=" py-2 px-4  text-sm dark:border-strokedark hover:underline">
                    <p className="text-sm">{item.Attribute}</p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark hover:underline">
                    <p className="text-sm">{item.DisplayType}</p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark hover:underline">
                    <p className="text-sm">{item.VariantCreation}</p>
                  </td>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark hover:underline">
                    <p className="text-sm">{item.Filter}</p>
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

export default AttributeTable;
