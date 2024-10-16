import ScrapTable from '../../../components/ScarpTable';
import TopSearchBar from '../../../components/TopSearchBar';

const Scrap = () => {
  const buttons = [{ label: 'New', path: 'new' }];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="Scrap Orders"
          btns={buttons}
          pagination={true}
          tools={true}
        />
        <ScrapTable />
      </div>
    </>
  );
};

export default Scrap;
