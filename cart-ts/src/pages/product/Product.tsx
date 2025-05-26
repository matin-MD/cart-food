import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/api";
import { IProducts } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProducts>();
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    cartItems,
    handleRemoveProduct,
  } = useShoppingCartContext();
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
          <div className="transition-all  text-right pb-2 border-2 hover:border-2 border-orange-500 hover:text-white text-white hover:border-orange-600  bg-orange-500  hover:bg-orange-600  rounded-lg ">
            <img src={product?.image} className="h-52  rounded-t-lg " />
            <div className="text-left pl-2 mx-5">
              <div className="pt-3 ">{product?.title}</div>
              <p className="pt-3 text-left ">{product?.description}</p>
              <div className="pt-3 pr-4">قیمت: ${product?.price}</div>
              <div className="grid justify-center mb-5">
                <div className="pt-3">
                  <span>
                    {getProductQty(parseInt(params.id as string)) === 0 ? (
                      <button
                        onClick={() => {
                          handleIncreaseProductQty(
                            parseInt(params.id as string)
                          );
                        }}
                        className="grid justify-center rounded-md text-xl py-2 px-10 shadow-green-200 shadow-sm hover:shadow-md hover:shadow-green-100 bg-green-700  hover:bg-green-600 items-center place-content-center"
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <>
                        <div className="grid grid-cols-3">
                          <button
                            onClick={() => {
                              handleIncreaseProductQty(
                                parseInt(params.id as string)
                              );
                            }}
                            className="grid justify-center rounded-md text-xl  py-2 px-5  shadow-blue-200 shadow-sm hover:shadow-md hover:shadow-blue-100 bg-green-600  hover:bg-green-500 items-center place-content-center"
                          >
                            +
                          </button>
                          <span className="grid place-content-center text-xl">
                            {getProductQty(parseInt(params.id as string))}
                          </span>

                          <button
                            onClick={() => {
                              handleDecreaseProductQty(
                                parseInt(params.id as string)
                              );
                            }}
                            className="grid justify-center rounded-md text-xl  py-2 px-5  shadow-red-200 shadow-sm hover:shadow-md hover:shadow-red-100 bg-red-700  hover:bg-red-600 items-center place-content-center"
                          >
                            -
                          </button>
                        </div>
                        <div className="grid grid-cols-1 pt-3">
                          <button
                            onClick={() => {
                              handleRemoveProduct(
                                parseInt(params.id as string)
                              );
                            }}
                            className="grid justify-center  rounded-md text-xl  py-2 px-5  shadow-yellow-200 shadow-sm hover:shadow-md hover:shadow-yellow-100 bg-yellow-500  hover:bg-yellow-400 items-center place-content-center"
                          >
                            delete
                          </button>
                        </div>
                      </>
                    )}
                  </span>
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
