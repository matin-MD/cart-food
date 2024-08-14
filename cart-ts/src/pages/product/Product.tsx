import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import { IProducts } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProducts>();
  const {cartItems} = useShoppingCartContext();
  useEffect(() => {
    getProduct(params.id as string).then((result) => {
      setProduct(result);
    });
  }, []);

  return (
    <>
      <div className="grid justify-center items-center content-center pt-28 ">
        <div className="transition rounded-lg ">
          <div className="transition-all  text-right pb-2 border-2 hover:border-2 border-neutral-700 hover:text-white text-white hover:border-neutral-900  bg-neutral-700  hover:bg-black active:bg-neutral-700 rounded-lg ">
            <img src={product?.image} className="h-40 w-full rounded-t-lg " />
            <p className="text-left pl-2 mx-5">
              <div className="pt-3 ">{product?.title}</div>
              <p className="pt-3  text-left ">{product?.description}</p>
              <div className="pt-3 pr-4">قیمت: ${product?.price}</div>
              <div className="grid justify-center mb-5">
                <div className="pt-3">
                  <button className="grid justify-center rounded-md text-xl  py-2 px-10  shadow-blue-200 shadow-sm hover:shadow-md hover:shadow-blue-100 bg-blue-800  hover:bg-blue-700 items-center place-content-center">
                    click
                  </button>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
  