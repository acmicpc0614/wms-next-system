import ProductCard from '../../components/ProductCard';
import TopSearchBar from '../../components/TopSearchBar';

interface ProductType {
  name: string;
  price: number;
  unit: number;
  imageUrl: string;
}

const data: ProductType[] = [
  {
    name: 'Receipts',
    price: 10.0,
    unit: 10.0,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Receipts',
    price: 10.0,
    unit: 10.0,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Receipts',
    price: 10.0,
    unit: 10.0,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Receipts',
    price: 10.0,
    unit: 10.0,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    name: 'Receipts',
    price: 10.0,
    unit: 10.0,
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
];

const buttons = [{ label: 'New', path: 'new' }];

const Products = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <TopSearchBar
        title="Products"
        btns={buttons}
        pagination={true}
        tools={false}
      />
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {data.map((item) => (
          <li
            // key={item.imageUrl}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <ProductCard
              name={item.name}
              price={item.price}
              unit={item.unit}
              imageUrl={item.imageUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
