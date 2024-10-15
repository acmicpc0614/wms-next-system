import OperationTable from '../../components/OperationTable';
import TopSearchBar from '../../components/TopSearchBar';

const Attributes = () => {
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
        <OperationTable />
      </div>
    </>
  );
};

export default Attributes;
