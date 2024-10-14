import ProductVariantsTable from "../../components/ProductVariantsTable";
import ProductVariantsTopSearchBar from "../../components/TopSearchBar/ProductVariantsTopSearchBar";

const ProductVariants = () => {
  const buttons = [{ label: 'New', path: 'newreceipts' }];

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <ProductVariantsTopSearchBar
        title="Product Variants"
        btns={buttons}
        pagination={true}
        tools={true}
      />
      <div>
        <ProductVariantsTable />
      </div>
    </div>
  );
};

export default ProductVariants;
