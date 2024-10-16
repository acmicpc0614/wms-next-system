import DeliveriesTable from '../../../components/DeliveriesTable';
import TopSearchBar from '../../../components/TopSearchBar';

const Deliveries = () => {
  const buttons = [{ label: 'New', path: 'new' }];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="Deliveries"
          btns={buttons}
          pagination={true}
          tools={true}
        />
        <DeliveriesTable />
      </div>
    </>
  );
};

export default Deliveries;
