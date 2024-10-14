import StockTable from "../../components/StockTable";
import StockTopSearchBar from "../../components/TopSearchBar/StockTopSearchBar";

const Stock = () => {
  const buttons = [{ label: 'New', path: 'newstock' }, { label: 'Inventory at Date', path: 'newStock' }];

  return (
    <div className="w-full h-full flex flex-col gap-10">
      <StockTopSearchBar
        title="Stock"
        btns={buttons}
        pagination={true}
        tools={true}
      />
      <div>
        <StockTable />
      </div>
    </div>
  );
};

export default Stock;
