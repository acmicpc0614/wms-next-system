import ReceiptsTable from '../../components/ReceiptsTable';
import TopSearchBar from '../../components/TopSearchBar';

const Receipts = () => {
  const buttons = [{ label: 'New', path: 'new' }];
  return (
    <div className="w-full h-full flex flex-col gap-4 ">
      <TopSearchBar title="Receipts" btns={buttons} />
      <ReceiptsTable />
    </div>
  );
};

export default Receipts;
