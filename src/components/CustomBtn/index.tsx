const CustomBtn = ({ title, fill }: { title: string; fill?: boolean }) => {
  return (
    <>
      <div
        className={
          fill
            ? 'py-1 px-4 outline-none bg-bodydark2 text-boxdark-2 rounded-md  hover:cursor-pointer hover:bg-bodydark items-center flex dark:text-bodydark1'
            : 'py-1 px-4 outline-none border-bodydark2 border-2 text-boxdark-2 rounded-md  hover:cursor-pointer hover:bg-bodydark items-center flex dark:text-bodydark1'
        }
      >
        {title}
      </div>
    </>
  );
};
export default CustomBtn;
