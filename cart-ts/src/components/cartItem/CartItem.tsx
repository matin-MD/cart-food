import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { IProducts } from "../../types/server";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

interface CartItem {
  id: number;
  qty: number;
}
function CartItem({ id, qty }: CartItem) {
  const [product, setProduct] = useState<IProducts>();
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();
  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);
  return (
    <>
      <div className="py-5  px-28 ">
        <div className=" px-5 flex flex-row-reverse justify-center text-2xl  text-white ">
          <Link to={`/product/${id}`}>
            <img
              className="rounded-md w-96 h-56 hover:border-white "
              src={product?.image}
            />
          </Link>

          <div className="grid text-center pr-10">
            <div className="grid justify-center">
              <p>{product?.title}</p>
              <span>${product?.price}</span>
            </div>
            <div>
              <div className="flex justify-center py-2 ">
                <button
                  onClick={() => handleIncreaseProductQty(id)}
                  className=" w-12 h-12 bg-green-600 hover:bg-green-500 rounded-md "
                >
                  +
                </button>
                <span className="mx-4 text-xl grid items-center">{qty}</span>
                <button
                  onClick={() => handleDecreaseProductQty(id)}
                  className=" w-12 h-12 bg-red-600 hover:bg-red-500 rounded-md"
                >
                  -
                </button>
              </div>
              <button
                onClick={() => handleRemoveProduct(id)}
                className="grid justify-center rounded-md text-md py-6 px-6 text-md shadow-md hover:shadow-md hover:shadow-yellow-200 bg-yellow-500  hover:bg-yellow-500 items-center place-content-center h-10"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
