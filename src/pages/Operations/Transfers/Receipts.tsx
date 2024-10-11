import TopSearchBar from '../../../components/TopSearchBar';

const Receipts = () => {
  const buttons = [{ label: 'New', path: 'newreceipts' }];
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <TopSearchBar
        title="Receipts"
        btns={buttons}
        pagination={true}
        tools={true}
      />
      <div>this is table dta</div>
    </div>
  );
};

export default Receipts;
