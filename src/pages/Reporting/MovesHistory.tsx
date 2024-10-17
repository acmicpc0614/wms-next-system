import MovesHistoryTable from "../../components/MovesHistoryTable";
import TopSearchBar from "../../components/TopSearchBar";

const MovesHistory = () => {
  const buttons: { label: string; path: string; }[] | undefined = [];

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <TopSearchBar
        title="Moves History"
        btns={buttons}
        pagination={true}
        tools={false}
      />
      <div>
        <MovesHistoryTable />
      </div>
    </div>
  );
};

export default MovesHistory;
