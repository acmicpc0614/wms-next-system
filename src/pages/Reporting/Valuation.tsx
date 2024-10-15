import ValuationTable from "../../components/ValuationTable";
import TopSearchBar from "../../components/TopSearchBar";

const Valuation = () => {
    const buttons = [{ label: 'Valuation at Date', path: 'newstock' }];

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <TopSearchBar
        title="Stock Valuation"
        btns={buttons}
        pagination={true}
        tools={true}
      />
      <div>
        <ValuationTable />
      </div>
    </div>
  );
};

export default Valuation;
