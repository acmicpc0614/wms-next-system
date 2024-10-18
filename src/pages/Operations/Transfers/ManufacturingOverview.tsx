import ManufacturingTable from '../../../components/ManufacturingTable';
import TopSearchBar from '../../../components/TopSearchBar';

const ManufactoringsOverview = () => {
  const buttons = [{ label: 'New', path: 'new' }];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="Manufacturings Overview"
          btns={buttons}
          pagination={true}
          tools={true}
        />
        <ManufacturingTable />
      </div>
    </>
  );
};
export default ManufactoringsOverview;
