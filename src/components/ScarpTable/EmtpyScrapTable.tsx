import { imgEmptyBox } from '../../images/icon';

const EmtpyScrapTable = () => {
  return (
    <>
      <div className="w-full h-full flex-1 flex flex-col gap-5 items-center justify-center py-30">
        <img src={imgEmptyBox} className="h-30 w-30" alt="empty" />
        <h1 className="font-bold text-2xl">Scrap products</h1>
        <p className="w-[50%] min-w-[400px]">
          Scrapping a product will remove it from your stock, The product will
          end up in a scrap location that can be used for reporting purpose.
        </p>
      </div>
    </>
  );
};
export default EmtpyScrapTable;
