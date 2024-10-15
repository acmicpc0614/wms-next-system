import DeliveryMethodTable from '../../components/DeliveryMethodTable';
import TopSearchBar from '../../components/TopSearchBar';

const DeliveryMethods = () => {
  const buttons = [{ label: 'New', path: 'new' }];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="Attributes"
          btns={buttons}
          pagination={true}
          tools={false}
        />
        <DeliveryMethodTable />
      </div>
    </>
  );
};

export default DeliveryMethods;
