import PurchaseOrderTable from '../../components/Table/PurchaseOrderTable';
import TopSearchBar from '../../components/TopSearchBar';

const PurchaseOrder = () => {
  const buttons = [{ label: 'New', path: 'new' }];
  return (
    <div className="w-full h-full flex flex-col gap-4 ">
      <TopSearchBar title="Purchase Order" btns={buttons} />
      <PurchaseOrderTable />
    </div>
  );
};

export default PurchaseOrder;
