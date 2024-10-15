import React from 'react';

interface KanbanType {
  name: string;
  quantity: number;
}

const KanbanCard: React.FC<KanbanType> = ({ name, quantity }) => {
  return (
    <div className="flex w-full items-center justify-between space-x-6 p-6">
      <div className="flex-1 truncate">
        <h3 className="font-bold">{name}</h3>
        <p className="mt-1 truncate text-sm text-gray-500">
          Quantity {quantity} / {quantity}
        </p>
      </div>
    </div>
  );
};

export default KanbanCard;
