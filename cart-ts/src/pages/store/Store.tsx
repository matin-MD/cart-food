import ProductItem from "../../components/productItem/ProductItem";

function Store() {
  return (
    <div className="pt-20 ">
      <p className="text-white px-28 text-right mb-5">محصولات جدید</p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  px-28">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

export default Store;
