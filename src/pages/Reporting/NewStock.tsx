import CustomBtn from '../../components/CustomBtn';
import {
  Icon272Cross,
  IconBxsCloudUpload,
  IconPushpin,
  IconGear,
} from '../../images/icon';
import {
  FaListUl,
  FaRegFileAlt,
  FaRegChartBar,
  FaCaretDown,
} from 'react-icons/fa';

const NewStock = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <CustomBtn title="New" clickedPath="/reporting/stock/newstock" />
            <div className="flex flex-col">
              <p>Stock</p>
              <div className="flex flex-row items-center">
                <IconGear />
              </div>
            </div>
            <IconBxsCloudUpload />
            <Icon272Cross />
          </div>
          <div className="flex flex-row items-center">
            <div className="px-3 py-2 rounded-l-md border-2 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
              <FaListUl />
              <div className="flex flex-col">
                <p className="text-xs">Pricelists</p>
                <p className="text-xs">0 Rules</p>
              </div>
            </div>
            <div className="px-3 py-2 border-2 border-l-0 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
              <FaListUl />
              <div className="flex flex-col">
                <p className="text-xs">Go to </p>
                <p className="text-xs">Website</p>
              </div>
            </div>
            <div className="px-3 py-2 border-2 border-l-0 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
              <FaRegFileAlt />
              <div className="flex flex-col">
                <p className="text-xs">Documents </p>
                <p className="text-xs">0</p>
              </div>
            </div>
            <div className="px-3 py-2 border-2 border-l-0 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
              <FaRegChartBar />
              <div className="flex flex-col">
                <p className="text-xs">Solid </p>
                <p className="text-xs">0.00 Units</p>
              </div>
            </div>
            <div className="h-full px-3 py-2 rounded-r-md border-2 border-l-0 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
              <p>More</p>
              <FaCaretDown />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <IconPushpin />
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <CustomBtn title="Update Quantity" fill={true} />
          <CustomBtn title="Replenish" fill={true} />
          <CustomBtn title="Print Labels" fill={true} />
        </div>
      </div>
    </>
  );
};

export default NewStock;
