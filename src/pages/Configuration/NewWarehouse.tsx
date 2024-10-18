import TopSearchBar from '../../components/TopSearchBar';

export default function NewWarehouse() {
  const buttons = [{ label: 'New', path: '' }];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="Warehouse"
          btns={buttons}
          pagination={true}
          tools={false}
        />
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <div className="flex flex-col gap-4">
              <p>Warehouse</p>
              <p className="text-3xl">Time - Warehouse #2</p>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-4 min-w-[50%]">
                  <p>Short Name</p>
                  <input
                    className="dark:bg-boxdark border-2 border-body rounded-md focus:outline-none "
                    placeholder="e.g."
                  />
                </div>
                <div className="flex flex-row gap-4">
                  <p>Address</p>
                  <input
                    className="dark:bg-boxdark border-2 border-body rounded-md focus:outline-none "
                    placeholder="time"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
