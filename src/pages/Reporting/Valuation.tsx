import ValuationTable from "../../components/ValuationTable";
import ValuationTopSearchBar from "../../components/TopSearchBar/ValuationTopSearchBar";

const Valuation = () => {
    const buttons = [{ label: 'Valuation at Date', path: 'newstock' }];

  return (
    <div className="w-full h-full flex flex-col gap-10">
      <ValuationTopSearchBar
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
