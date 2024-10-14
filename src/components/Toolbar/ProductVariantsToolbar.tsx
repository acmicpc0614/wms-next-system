import { imgchart, imglist } from '../../images/icon';

const ProductVariantsToolbar = () => {
  return (
    <div className="flex flex-row gap-1 rounded-lg bg-bodydark1 dark:bg-bodydark2">
      <div className="w-8 h-8 p-2 hover:opacity-30">
        <img src={imglist} alt="imgList" />
      </div>
      <div className="w-8 h-8 p-2 hover:opacity-30">
        <img src={imgchart} alt="imgchart" />
      </div>
    </div>
  );
};

export default ProductVariantsToolbar;
