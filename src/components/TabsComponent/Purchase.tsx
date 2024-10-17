interface PurchaseDataType {
  Vendor: string;
  Quantity: string;
  Price: string;
  Delivery: string;
}

const PurchaseData: PurchaseDataType[] = [];

const Purchase = () => {
  return (
    <div className="">
      <div className="mt-2 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                <th className="text-sm font-semibold py-4 px-4 font-semibold text-black dark:text-white">
                  Vendor
                </th>
                <th className="text-sm font-semibold py-4 px-4 font-semibold text-black dark:text-white">
                  Quantity
                </th>
                <th className="text-sm font-semibold py-4 text-right px-4 font-semibold text-black dark:text-white">
                  Price
                </th>
                <th className="text-sm font-semibold py-4 px-4 font-semibold text-black dark:text-white">
                  Delivery
                </th>
              </tr>
            </thead>
            <tbody>
              {PurchaseData.length > 0 ? (
                PurchaseData.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 1 ? 'bg-gray-2 dark:bg-meta-4' : ''
                    } hover:cursor-pointer border-b border-[#aaaaaa]`}
                  >
                    <td className=" py-2 px-4  text-sm dark:border-strokedark hover:underline">
                      <p className="text-sm">{item.Vendor}</p>
                    </td>
                    <td className=" py-2 px-4  text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">{item.Quantity}</p>
                    </td>
                    <td className=" py-2 px-4  text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">{item.Price}</p>
                    </td>
                    <td className=" py-2 px-4  text-sm dark:border-strokedark">
                      <p className="text-black dark:text-white">{item.Delivery}</p>
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
      <div className="grid grid-cols-2 gap-4 py-10 text-sm">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold">VENDOR BILLS</p>
            <hr className="border-inherit" />
          </div>
          <div className="flex gap-10">
            <p className="font-semibold">Control Policy</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <p className="font-medium">On ordered quantities</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <p className="font-medium">On received quantities</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold">PURCHASE DESCRIPTION</p>
            <hr className="border-inherit" />
          </div>
          <p>This note is added to purchase orders.</p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
