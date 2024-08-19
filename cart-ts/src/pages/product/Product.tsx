import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import { IProducts } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProducts>();
  const { handleIncreaseProductQty, handleDecreaseProductQty, cartItems } =useShoppingCartContext();
  useEffect(() => {
    getProduct(params.id as string).then((result) => {
      setProduct(result);
    });
  }, []);
  console.log(cartItems);

  return (
    <>
      <div className="grid justify-center items-center content-center pt-28 ">
        <div className="transition rounded-lg ">
          <div className="transition-all  text-right pb-2 border-2 hover:border-2 border-neutral-700 hover:text-white text-white hover:border-neutral-900  bg-neutral-700  hover:bg-black active:bg-neutral-700 rounded-lg ">
            <img src={product?.image} className="h-52  rounded-t-lg " />
            <div className="text-left pl-2 mx-5">
              <div className="pt-3 ">{product?.title}</div>
              <p className="pt-3 text-left ">{product?.description}</p>
              <div className="pt-3 pr-4">قیمت: ${product?.price}</div>
              <div className="grid justify-center mb-5">
                <div className="pt-3">
                  <button
                    onClick={() => {
                      handleIncreaseProductQty(parseInt(params.id as string));
                    }}
                    className="grid justify-center rounded-md text-xl  py-2 px-10  shadow-blue-200 shadow-sm hover:shadow-md hover:shadow-blue-100 bg-blue-800  hover:bg-blue-700 items-center place-content-center"
                  >
                    Add . . .
                  </button>{" "}
                  <button
                    onClick={() => {
                      handleDecreaseProductQty(parseInt(params.id as string));
                    }}
                    className="grid justify-center rounded-md text-xl  py-2 px-10  shadow-red-200 shadow-sm hover:shadow-md hover:shadow-red-100 bg-red-600  hover:bg-red-500 items-center place-content-center"
                  >
                    Remove . . .
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
