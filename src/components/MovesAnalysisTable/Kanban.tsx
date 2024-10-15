import KanbanCard from "../KanbanCard";

interface KanbanType {
  name: string;
  quantity: number;
}

const data: KanbanType[] = [
  {
    name: 'Receipts',
    quantity: 10.0,
  },
  {
    name: 'Receipts',
    quantity: 10.0,
  },
  {
    name: 'Receipts',
    quantity: 10.0, 
  },
  {
    name: 'Receipts',
    quantity: 10.0,
  },
  {
    name: 'Receipts',
    quantity: 10.0,
  },
];

const Kanban = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {data.map((item) => (
          <li
            // key={item.imageUrl}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <KanbanCard
              name={item.name}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Kanban;
