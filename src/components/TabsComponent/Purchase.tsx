const Purchase = () => {
  return (
    <div className="">
      <table className="min-w-full divide-y divide-gray-300 border-y table-auto border-t-0">
        <thead>
          <tr>
            <th
              scope="col"
              className="min-w-[700px] py-1.5 pl-1 pr-1 text-left text-sm font-semibold text-gray-900"
            >
              Attribute
            </th>
            <th
              scope="col"
              className="px-1 py-1.5 text-left text-sm font-semibold text-gray-900"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="text-right  px-1 py-1.5 text-left text-sm font-semibold text-gray-900"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-1 py-1.5 text-left text-sm font-semibold text-gray-900"
            >
              Delivery
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="even:bg-gray-50">
            <td className="whitespace-nowrap py-1.5 pl-1 pr-1 text-sm font-medium text-gray-9000 w-1/3">
              Add a line
            </td>
          </tr>
        </tbody>
      </table>
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
