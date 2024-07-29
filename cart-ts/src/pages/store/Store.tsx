import ProductItem from "../../components/productItem/ProductItem";

function Store() {
  return (
    <div className="grid grid-cols-4 gap-2 px-28">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}

export default Store;
