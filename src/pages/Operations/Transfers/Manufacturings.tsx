import ManufacturingTable from '../../../components/ManufacturingTable';
import TopSearchBar from '../../../components/TopSearchBar';

const Manufactorings = () => {
  const buttons = [{ label: 'New', path: 'new' }];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-10">
        <TopSearchBar
          title="Manufacturings"
          btns={buttons}
          pagination={true}
          tools={true}
        />
        <div>
          <ManufacturingTable />
        </div>
      </div>
    </>
  );
};
export default Manufactorings;
