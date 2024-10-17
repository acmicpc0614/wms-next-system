interface AttributeDataType {
  Attribute: string;
  Values: string;
}

const AttributeData: AttributeDataType[] = [];

const Attribute = () => {
  return (
    <div className="">
      <div className="mt-2 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                <th className="text-sm font-semibold py-4 px-4 font-semibold text-black dark:text-white">
                  Attribute
                </th>
                <th className="text-sm font-semibold py-4 px-4 font-semibold text-black dark:text-white">
                  Values
                </th>
              </tr>
            </thead>
            <tbody>
              {AttributeData.length > 0 ? (
                AttributeData.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 1 ? 'bg-gray-2 dark:bg-meta-4' : ''
                    } hover:cursor-pointer border-b border-[#aaaaaa]`}
                  >
                    <td className=" py-2 px-4  text-sm dark:border-strokedark hover:underline">
                      <p className="text-sm">{item.Attribute}</p>
                    </td>
                    <td className=" py-2 px-4  text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {item.Values}
                      </p>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className=" py-2 px-4  text-sm dark:border-strokedark hover:underline">
                    <p className="text-sm text-success">Add a line</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-sm text-black-600/0 px-2 pt-4 pb-20">
        Warning: adding or deleting attributes will delete and recreate existing
        variants and lead to the loss of their possible customizations.
      </p>
    </div>
  );
};

export default Attribute;
