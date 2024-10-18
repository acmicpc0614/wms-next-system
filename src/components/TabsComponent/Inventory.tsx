const Inventory = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold text-sm">OPERATIONS</p>
            <hr className="border-inherit" />
          </div>
          <div className="flex gap-6">
            <p className="font-semibold text-sm">Routes</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <input type="checkbox" />
                <p className="font-medium text-sm">Buy</p>
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" />
                <p className="font-medium text-sm">Manufacture</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold text-sm">LOGISTICS</p>
            <hr className="border-inherit" />
          </div>
          <table className="min-w-full">
            <tbody className="">
              <tr>
                <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900 w-[180px]">
                  Responsive
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500">
                  Madhavi
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
                  Weight
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500">
                  0.00
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500">
                  kg
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
                  Volume
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500">
                  0.00
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500">
                  m3
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
                  Customer Lead Time
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500">
                  0
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500">
                  days
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
                  Version
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500">
                  1
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
                  HS Code
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
              </tr>
              <tr>
                <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
                  Origin of Goods
                </td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
                <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4 pb-20 text-sm">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold text-sm">DESCRIPTION FOR RECEIPTS</p>
            <hr className="border-inherit" />
          </div>
          <p>This note is added to receipt orders(e.g. where to store the product in the warehouse).</p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold text-sm">
              DESCRIPTION FOR DELIVERY ORDERS
            </p>
            <hr className="border-inherit" />
          </div>
          <p>This note is added to delivery orders.</p>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
