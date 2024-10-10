import TopSearchBar from '../../components/TopSearchBar';

const OverView = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <TopSearchBar title="Overview" pagination={true} />
        <div>this is OverView page</div>
      </div>
    </>
  );
};

export default OverView;
