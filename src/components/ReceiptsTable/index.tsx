import { useNavigate } from 'react-router-dom';
import { EmptyIconStar } from '../../images/icon';
import { ReceiptsData } from '../../store/StaticData';
import { getBaseColor } from '../../utils/Actions';
import CMSPagination from '../CMSPagination';
import { useLayoutEffect, useRef, useState } from 'react';

interface ReceiptItem {
  id: string; // or number, depending on your data structure
  Reference: string;
  Contact: string;
  ScheduledData: string;
  SourceDoc: string;
  Status: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const ReceiptsTable: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (reference: string) => {
    navigate(`/operations/receipts/detail/${reference}`);
  };

  const checkbox = useRef<HTMLInputElement | null>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ReceiptItem[]>([]);
  const [sortKey, setSortKey] = useState<keyof ReceiptItem | ''>('');

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedItem.length > 0 && selectedItem.length < ReceiptsData.length;
    setChecked(selectedItem.length === ReceiptsData.length);
    setIndeterminate(isIndeterminate);

    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedItem, ReceiptsData.length]);

  function toggleAll() {
    const newSelectedItems = checked || indeterminate ? [] : ReceiptsData;
    setSelectedItem(newSelectedItems);
    setChecked(newSelectedItems.length === ReceiptsData.length);
    setIndeterminate(false);
  }

  const sortData = (
    data: ReceiptItem[],
    key: keyof ReceiptItem,
    order: 'asc' | 'desc',
  ) => {
    return data.sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (aValue < bValue) return order === 'asc' ? -1 : 1;
      if (aValue > bValue) return order === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const handleSort = (key: keyof ReceiptItem) => {
    const newOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(newOrder);
  };

  const sortedData = sortData([...ReceiptsData], sortKey, sortOrder);

  return (
    <>
      <div className="flex-1 flex justify-between flex-col rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 min-w-[900px]">
        <div className="relative">
          {selectedItem.length > 0 && (
            <div className="absolute left-14 top-1 flex h-10 items-center space-x-3 bg-gray-2 dark:bg-meta-4 sm:left-12">
              <button
                type="button"
                className="inline-flex items-center rounded bg-white  px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white dark:bg-boxdark"
              >
                Bulk edit
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white dark:bg-boxdark"
              >
                Delete all
              </button>
            </div>
          )}
          <table className="min-w-full table-fixed divide-y divide-gray-300">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
                <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                  <input
                    type="checkbox"
                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    ref={checkbox}
                    checked={checked}
                    onChange={toggleAll}
                  />
                </th>
                <th
                  scope="col"
                  className="px-3 text-left text-sm font-semibold text-gray-900"
                ></th>
                <th
                  scope="col"
                  className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 cursor-pointer"
                  onClick={() => handleSort('Reference')}
                >
                  Reference&nbsp;
                  {sortKey === 'Reference'
                    ? sortOrder === 'asc'
                      ? '↑'
                      : '↓'
                    : ''}
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer"
                  onClick={() => handleSort('Contact')}
                >
                  Contact&nbsp;
                  {sortKey === 'Contact'
                    ? sortOrder === 'asc'
                      ? '↑'
                      : '↓'
                    : ''}
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer"
                  onClick={() => handleSort('ScheduledData')}
                >
                  Scheduled Data&nbsp;
                  {sortKey === 'ScheduledData'
                    ? sortOrder === 'asc'
                      ? '↑'
                      : '↓'
                    : ''}
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer"
                  onClick={() => handleSort('SourceDoc')}
                >
                  Source Document&nbsp;
                  {sortKey === 'SourceDoc'
                    ? sortOrder === 'asc'
                      ? '↑'
                      : '↓'
                    : ''}
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer"
                  onClick={() => handleSort('Status')}
                >
                  Status&nbsp;
                  {sortKey === 'Status'
                    ? sortOrder === 'asc'
                      ? '↑'
                      : '↓'
                    : ''}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {sortedData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 1
                      ? 'bg-gray-2 dark:bg-meta-4'
                      : 'dark:bg-boxdark'
                  } hover:cursor-pointer border-b border-[#aaaaaa]`}
                >
                  <td className="relative px-7 sm:w-12 sm:px-6">
                    {selectedItem.includes(item) && (
                      <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                    )}
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      value={item.id}
                      checked={selectedItem.includes(item)}
                      onChange={(e) =>
                        setSelectedItem(
                          e.target.checked
                            ? [...selectedItem, item]
                            : selectedItem.filter((p) => p !== item),
                        )
                      }
                    />
                  </td>
                  <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                    <EmptyIconStar />
                  </td>
                  <td
                    className={classNames(
                      'whitespace-nowrap py-4 pr-3 text-sm font-medium hover:underline ',
                      selectedItem.includes(item)
                        ? 'text-indigo-600'
                        : 'text-gray-900',
                    )}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.Reference}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.Contact}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.ScheduledData}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {item.SourceDoc}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
                    <p
                      className={`inline-flex rounded-ful py-1 px-3 text-sm font-semibold font-medium rounded-full ${getBaseColor(
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
        <CMSPagination />
      </div>
    </>
  );
};

export default ReceiptsTable;
