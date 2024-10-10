import OverViewItem from '../../components/OverViewItem';
import TopSearchBar from '../../components/TopSearchBar';

const OverView = () => {
  interface DataItem {
    title: string;
    path: string;
  }

  const data: DataItem[] = [
    { title: 'Receipts', path: '/checkin' },
    { title: 'Delivery Orders', path: '/checkin' },
    { title: 'Manufacturing', path: '/checkin' },
    { title: 'Pos Orders', path: '/checkin' },
    { title: 'Search Bar', path: '/checkin' },
  ];

  return (
    <>
      <div className="w-full h-full flex flex-col gap-10">
        <TopSearchBar title="Overview" pagination={true} />
        <div className="flex flex-wrap w-full">
          {data.map((item) => (
            <OverViewItem title={item.title} path={item.path} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OverView;
