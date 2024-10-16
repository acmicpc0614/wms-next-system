import ProductCategoriesTable from '../../components/ProductCategoriesTable';
import TopSearchBar from '../../components/TopSearchBar';

const ProductCategories = () => {
  const buttons = [{ label: 'New', path: 'new' }];
  return (
    <>
      <div className="w-full h-full flex flex-col gap-5">
        <TopSearchBar
          title="Product Category"
          btns={buttons}
          pagination={true}
          tools={false}
        />
        <ProductCategoriesTable />
      </div>
    </>
  );
};

export default ProductCategories;
