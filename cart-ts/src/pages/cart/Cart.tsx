import CartItem from "../../components/cartItem/CartItem";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
function Cart() {
  const { cartItems, cartQty } = useShoppingCartContext();

  return (
    <>
      <div className=" py-5">
        <div className="gap-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-1 2xl:grid-cols-1 ">
          {cartItems.map((item) => (
            <div className="px-5 sm:px-5 md:px-28 lg:px-28 xl:px-28 2xl:px-28">
              <div style={{ width: "100%" }} className="w-screen">
                <div className="border-b bg-neutral-700 rounded-lg grid justify-center hover:bg-neutral-800 hover:rounded-md ">
                  <CartItem {...item} />
                </div>
              </div>
            </div>
          ))}
          <div className="text-white text-3xl text-center grid place-content-center h-screen">
            {cartQty === 0 ? "سید خرید خالی است" : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
