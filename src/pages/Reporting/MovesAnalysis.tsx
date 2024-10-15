import MovesAnalysisTable from "../../components/MovesAnalysisTable";
import MovesAnalysisTopSearchBar from "../../components/TopSearchBar/MovesAnalysisTopSearchBar";

const MovesAnalysis = () => {
  const buttons: { label: string; path: string; }[] | undefined = [];

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <MovesAnalysisTopSearchBar
        title="Moves Analysis"
        btns={buttons}
        pagination={true}
        tools={true}
      />
      <div>
        <MovesAnalysisTable />
      </div>
    </div>
  );
};

export default MovesAnalysis;
