import { Link } from "react-router-dom";
import ProductItem from "../../components/productItem/ProductItem";

function Store() {
  return (
    <div className="pt-10 ">
      <p className="text-white px-28 text-right mb-5 text-xl">محصولات جدید</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-5   px-28">
        <Link to={`/product/${1}`} className="pb-10">
          <ProductItem />
        </Link>
        <Link to={`/product/${1}`} className="pb-10">
          <ProductItem />
        </Link>
        <Link to={`/product/${1}`} className="pb-10">
          <ProductItem />
        </Link>
        <Link to={`/product/${1}`} className="pb-10">
          <ProductItem />
        </Link>
      </div>
    </div>
  );
}

export default Store;
