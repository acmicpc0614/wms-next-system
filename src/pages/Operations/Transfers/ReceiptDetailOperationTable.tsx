import React, { useState } from 'react';

interface ReceiptItem {
  item: string;
  quantity: number;
  price: number;
}

const ReceiptDetailOperationTable: React.FC = () => {
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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Receipt Data Entry</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Item</th>
            <th className="border border-gray-300 p-2">Quantity</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {receiptData.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">
                <input
                  type="text"
                  value={item.item}
                  onChange={(e) =>
                    handleInputChange(index, 'item', e.target.value)
                  }
                  placeholder="Item"
                  className="border border-gray-400 p-1 w-full"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleInputChange(index, 'quantity', e.target.value)
                  }
                  placeholder="Quantity"
                  className="border border-gray-400 p-1 w-full"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    handleInputChange(index, 'price', e.target.value)
                  }
                  placeholder="Price"
                  className="border border-gray-400 p-1 w-full"
                />
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => removeLine(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addLine}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add a line
      </button>

      {/* Debugging output */}
      <pre className="mt-4">{JSON.stringify(receiptData, null, 2)}</pre>
    </div>
  );
};

export default ReceiptDetailOperationTable;
