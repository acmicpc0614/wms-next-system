import TopSearchBar from '../../../components/TopSearchBar';

const Receipts = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <TopSearchBar title="Receipts" pagination={true} tools={true} />
    </div>
  );
};

export default Receipts;
