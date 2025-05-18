import { Link } from "react-router-dom";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { IProducts } from "../../types/server";
function Store() {
  const [product, setProduct] = useState<IProducts[]>([]);
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
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-14 2xl:gap-24 gap-5 px-28">
        {product.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} className="pb-10">
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Store;
