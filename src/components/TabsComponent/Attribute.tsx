const Attribute = () => {
  return (
    <div className="">
      <table className="min-w-full divide-y divide-gray-300 border-y table-auto border-t-0">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-1.5 pl-1 pr-1 text-left text-sm font-semibold text-gray-900 w-1/3"
            >
              Attribute
            </th>
            <th
              scope="col"
              className="px-1 py-1.5 text-left text-sm font-semibold text-gray-900"
            >
              Values
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
      <p className="text-sm text-black-600/0 px-2 pt-4 pb-20">
        Warning: adding or deleting attributes will delete and recreate existing
        variants and lead to the loss of their possible customizations.
      </p>
    </div>
  );
};

export default Attribute;
