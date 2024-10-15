import InventoryAdjustmentsTable from '../../../components/InventoryAdjustmentsTable';
import TopSearchBar from '../../../components/TopSearchBar';

const Physicalinventory = () => {
  const buttons = [
    { label: 'New', path: 'new' },
    { label: 'Apply All', path: 'applyall' },
  ];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="Inventory Adjustments"
          btns={buttons}
          pagination={true}
          tools={false}
        />
        <div>
          <InventoryAdjustmentsTable />
        </div>
      </div>
    </>
  );
};

export default Physicalinventory;
