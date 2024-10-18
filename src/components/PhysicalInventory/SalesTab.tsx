export default function SalesTab() {
  return (
    <div className="flex flex-col mx-auto p-6 bg-white rounded-lg shadow dark:bg-boxdark">
      <div className="flex flex-row">
        <div className="flex flex-col w-[50%] gap-4">
          <h1 className="font-semibold border-b-2 border-bodydark2 mr-4">
            UPSELL & CROSS-SELL
          </h1>
          <div className="flex flex-row gap-2">
            <p className="font-semibold w-[220px]">Optional Products</p>
            <p className="text-sm">
              Recommend whe 'Adding to Cart' or quotation
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-semibold w-[220px]">Accessory Products</p>
            <p className="text-sm">
              Suggested accessories in the eCommerce cart
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="font-semibold w-[220px]">Alternative Products</p>
            <p className="text-sm">Displayed in bottom of product pages</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold border-b-2 border-bodydark2 mr-4">
            ECOMMERCE SHOP
          </h1>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Tags</p>
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Variant Tags</p>
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Is Published</p>
            <input type="checkbox" />
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Categories</p>
            <p></p>
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Out-of-Stock</p>
            <div className="flex flex-row gap-2">
              <input type="checkbox" />
              <p>Continue Selling</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Show Available Qty</p>
            <input type="checkbox" />
          </div>
          <div className="flex flex-row gap-4 ">
            <p className="font-semibold w-[150px]">Out-of-Stock Message</p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="w-full border-b-2 border-b-body">ECOMMERCE MEDIA</p>
        <div className="rounded-md bg-body dark:bg-boxdark-2 text-white px-3 py-2 w-34 text-center">
          Add Media
        </div>
      </div>
    </div>
  );
}
