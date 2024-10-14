import { useNavigate } from 'react-router-dom';

const CustomBtn = ({
  title,
  fill,
  clickedPath,
}: {
  title: string;
  fill?: boolean;
  clickedPath?: any;
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(clickedPath);
  };
  return (
    <>
      <div
        className={
          fill
            ? 'py-1 px-4 outline-none bg-bodydark2 text-boxdark-2 rounded-md  hover:cursor-pointer hover:bg-bodydark items-center flex dark:text-bodydark1'
            : 'py-1 px-4 outline-none border-bodydark2 border-2 text-boxdark-2 rounded-md  hover:cursor-pointer hover:bg-bodydark items-center flex dark:text-bodydark1'
        }
        onClick={handleClick}
      >
        {title}
      </div>
    </>
  );
};
export default CustomBtn;
