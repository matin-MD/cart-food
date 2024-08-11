import { Link } from "react-router-dom";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
function Store() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts().then((result) => {
      setProduct(result);
    });
  }, []);
  return (
    <div className="pt-10 ">
      <p className="text-white px-28 mb-5 text-xl text-center sm:text-right md:text-right lg:text-right">
        محصولات جدید
      </p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  gap-5   px-28">
        {product.map((item) => (
          <Link key={item?.id} to={`/product/${1}`} className="pb-10">
            <ProductItem />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Store;
