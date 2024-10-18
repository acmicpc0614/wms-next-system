import ManufacturingTable from '../../../components/ManufacturingTable';
import TopSearchBar from '../../../components/TopSearchBar';

const ProductMoves = () => {
  const buttons = [{ label: 'New', path: 'new' }];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="Product Moves"
          btns={buttons}
          pagination={true}
          tools={true}
        />
        <ManufacturingTable />
      </div>
    </>
  );
};
export default ProductMoves;
