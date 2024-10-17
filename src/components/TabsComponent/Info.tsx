const Info = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <table className="min-w-full h-[100px]">
        <tbody className="">
          <tr>
            <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
              Product Type
            </td>
            <td className="flex gap-2 whitespace-nowrap px-1 py-2 text-sm text-gray-500">
              <div className="flex gap-1">
                <input type="radio" />
                <p>Goods</p>
              </div>
              <div className="flex gap-1">
                <input type="radio" />
                <p>Service</p>
              </div>
              <div className="flex gap-1">
                <input type="radio" />
                <p>Combo</p>
              </div>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-1 pr-1 text-sm font-semibold text-gray-900">
              Track Inventory
            </td>
            <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500">
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
              Invoicing Policy
            </td>
            <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500">
              Ordered quantities
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900"></td>
            <td className="whitespace-nowrap px-1 py-2 text-sm text-gray-500 italic">
              You can invoice goods before they are delivered.
            </td>
          </tr>
        </tbody>
      </table>
      <table className="min-w-full">
        <tbody className="">
          <tr>
            <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
              Sales Price
            </td>
            <td className="flex gap-2 whitespace-nowrap px-1 py-2 text-sm text-gray-500">
              1.00 AED
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
              Sales Taxes
            </td>
            <td className="flex items-center justify-between gap-2 whitespace-nowrap px-1 py-2 text-sm text-gray-500">
              <p
                className={`inline-flex rounded-ful py-1 px-3 text-sm font-medium rounded-full bg-bodydark1 text-boxdark-2`}
              >
                5% AD
              </p>  
              <p>(= 1.05 AED Incl. Taxes)</p>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
              Cost
            </td>
            <td className="flex gap-2 whitespace-nowrap px-1 py-2 text-sm text-gray-500">
              0.00 AED
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
              Purchase Taxes
            </td>
            <td className="flex gap-2 whitespace-nowrap px-1 py-2 text-sm text-gray-500">
              <p
                className={`inline-flex rounded-ful py-1 px-3 text-sm font-medium rounded-full bg-bodydark1 text-boxdark-2`}
              >
                5%
              </p>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
              Category
            </td>
            <td className="flex gap-2 whitespace-nowrap px-1 py-2 text-sm text-gray-500">
              All
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
              Reference
            </td>
            <td className="flex gap-2 whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
          </tr>
          <tr>
            <td className="whitespace-nowrap py-2 pr-1 text-sm font-semibold text-gray-900">
              Barcode
            </td>
            <td className="flex gap-2 whitespace-nowrap px-1 py-2 text-sm text-gray-500"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Info;
