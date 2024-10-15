import OperationTable from '../../components/OperationTable';
import TopSearchBar from '../../components/TopSearchBar';

const OperationsTypes = () => {
  const buttons = [{ label: 'New', path: 'new' }];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="Operations Types"
          btns={buttons}
          pagination={true}
          tools={false}
        />
        <OperationTable />
      </div>
    </>
  );
};

export default OperationsTypes;
