import StockTable from "../../components/StockTable";
import TopSearchBar from "../../components/TopSearchBar";

const Stock = () => {
  const buttons = [{ label: 'New', path: 'newstock' }, { label: 'Inventory at Date', path: 'newStock' }];

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <TopSearchBar
        title="Stock"
        btns={buttons}
        pagination={true}
        tools={false}
      />
      <div>
        <StockTable />
      </div>
    </div>
  );
};

export default Stock;
