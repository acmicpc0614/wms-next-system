import React, { useState } from 'react';
import { IconPlayListRemove } from '../../../images/icon';
import { getInputClassNameForTable } from '../../../utils/Actions';
import CustomInputSelect from '../../../components/CustomInputSelect';

interface ReceiptItem {
  item: string;
  quantity: number;
  price: number;
}

const ReceiptDetailOperationTable: React.FC = () => {
  const [productItems, setproductItems] = useState<{ item: string }[]>([
    { item: '' },
  ]);
  const productOptions = ['select 1', 'select 2', 'select 3']; // Your data options

  const handleInputSelectChange = (
    index: number,
    field: string,
    value: string,
  ) => {
    const newproductItems = [...productItems];
    newproductItems[index][field] = value;
    setproductItems(newproductItems);
  };

  const [receiptData, setReceiptData] = useState<ReceiptItem[]>([]);

  const addLine = () => {
    setReceiptData([...receiptData, { item: '', quantity: 0, price: 0 }]);
  };

  const handleInputChange = (
    index: number,
    field: keyof ReceiptItem,
    value: string | number,
  ) => {
    const updatedData = [...receiptData];
    if (field === 'quantity' || field === 'price') {
      updatedData[index][field] = Number(value);
    } else {
      updatedData[index][field] = value as string;
    }
    setReceiptData(updatedData);
  };

  const removeLine = (index: number) => {
    // Remove the line from receiptData
    const updatedData = receiptData.filter((_, i) => i !== index);
    setReceiptData(updatedData);
  };

  return (
    <div className="">
      <h2 className="text-xl font-bold my-6">Receipt Data Entry</h2>
      <table className="min-w-full table-fixed divide-y divide-gray-300">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4 border-[#aaaaaa] border-b border-t">
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer min-w-[400px]">
              Product
            </th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer w-[100px] min-w-22.5">
              Quantity
            </th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer w-[100px] min-w-22.5">
              Price
            </th>
            <th className=" py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer w-[60px]"></th>
          </tr>
        </thead>
        <tbody>
          {receiptData.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 1 ? 'bg-gray-2 dark:bg-meta-4' : 'dark:bg-boxdark'
              } hover:cursor-pointer border-b border-[#aaaaaa]`}
            >
              <td className="relative px-7 sm:w-12 sm:px-6">
                {productItems.map((item, index) => (
                  <CustomInputSelect
                    key={index}
                    item={item}
                    index={index}
                    handleInputSelectChange={handleInputSelectChange}
                    options={productOptions}
                  />
                ))}
              </td>
              <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleInputChange(index, 'quantity', e.target.value)
                  }
                  placeholder="Quantity"
                  className={getInputClassNameForTable(index)}
                />
              </td>
              <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500">
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    handleInputChange(index, 'price', e.target.value)
                  }
                  placeholder="Price"
                  className={getInputClassNameForTable(index)}
                />
              </td>
              <td className="whitespace-nowrap px-3 py-2 text-sm text-gray-500 items-center">
                <button
                  onClick={() => removeLine(index)}
                  className="hover:text-danger"
                >
                  <IconPlayListRemove />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addLine}
        className="mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Add a line
      </button>

      {/* Debugging output */}
      {/* <pre className="mt-4">{JSON.stringify(receiptData, null, 2)}</pre> */}
    </div>
  );
};

export default ReceiptDetailOperationTable;
