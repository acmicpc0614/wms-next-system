import TopSearchBar from '../../components/TopSearchBar';
import WarehouseTable from '../../components/WarehouseTable';

const Warehouses = () => {
  const buttons = [{ label: 'New', path: 'new' }];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="Warehouses"
          btns={buttons}
          pagination={true}
          tools={false}
        />
        <WarehouseTable />
      </div>
    </>
  );
};

export default Warehouses;
