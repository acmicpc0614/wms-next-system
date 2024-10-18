import ProductVariantsTable from "../../components/ProductVariantsTable";
import TopSearchBar from "../../components/TopSearchBar";

const ProductVariants = () => {
  const buttons = [{ label: 'New', path: 'new' }];

  return (
    <div className="w-full h-full flex flex-col gap-5">
      <TopSearchBar
        title="Product Variants"
        btns={buttons}
        pagination={true}
        tools={false}
      />
      <div>
        <ProductVariantsTable />
      </div>
    </div>
  );
};

export default ProductVariants;
