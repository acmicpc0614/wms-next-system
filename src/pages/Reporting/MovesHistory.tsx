import MovesHistoryTable from "../../components/MovesHistoryTable";
import MovesHistoryTopSearchBar from "../../components/TopSearchBar/MovesHistoryTopSearchBar";

const MovesHistory = () => {
  const buttons: { label: string; path: string; }[] | undefined = [];

  return (
    <div className="w-full h-full flex flex-col gap-10">
      <MovesHistoryTopSearchBar
        title="Moves History"
        btns={buttons}
        pagination={true}
        tools={true}
      />
      <div>
        <MovesHistoryTable />
      </div>
    </div>
  );
};

export default MovesHistory;
