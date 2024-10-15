import CustomBtn from '../../../components/CustomBtn';
import {
  Icon272Cross,
  IconBxsCloudUpload,
  IconPushpin,
  IconThMenu,
  imgGear,
} from '../../../images/icon';

const NewReceipt = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-center">
            <CustomBtn title="New" clickedPath="/operations/receipts/new" />
            <div className="flex flex-col">
              <p>Receipts</p>
              <div className="flex flex-row items-center">
                <img src={imgGear} className="w-4 h-4" alt="gear" />
              </div>
            </div>
            <IconBxsCloudUpload />
            <Icon272Cross />
          </div>
          <div className="flex flex-row items-center">
            <div className="px-3 py-2 rounded-md border-2 border-bodydark2 flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-bodydark hover:text-graydark">
              <IconThMenu />
              Moves
            </div>
          </div>
          <div className="flex flex-row items-center">
            <IconPushpin />
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <CustomBtn title="Mark as Todo" fill={true} />
          <CustomBtn title="Validate" />
          <CustomBtn title="Return" />
          <CustomBtn title="Cancel" />
        </div>
      </div>
    </>
  );
};

export default NewReceipt;
