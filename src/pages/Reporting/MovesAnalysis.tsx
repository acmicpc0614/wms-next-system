import MovesAnalysisTable from "../../components/MovesAnalysisTable";
import TopSearchBar from "../../components/TopSearchBar";

const MovesAnalysis = () => {
  const buttons: { label: string; path: string; }[] | undefined = [];

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <TopSearchBar
        title="Moves Analysis"
        btns={buttons}
        pagination={false}
        tools={true}
      />
      <div>
        <MovesAnalysisTable />
      </div>
    </div>
  );
};

export default MovesAnalysis;
