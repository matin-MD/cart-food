import CartItem from "../../components/cartItem/CartItem";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
function Cart() {
  const { cartItems, cartQty } = useShoppingCartContext();

  return (
    <>
      <div className=" py-5">
        <span className="flex flex-row-reverse pr-28 text-2xl text-orange-900">سبد خرید</span>
        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-1 2xl:grid-cols-1 ">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="px-5 sm:px-5 md:px-28 lg:px-28 xl:px-28 2xl:px-28"
            >
              <div style={{ width: "100%" }} className="w-screen">
                <div className="border-b bg-orange-500 rounded-lg grid justify-center hover:bg-orange-600 mt-10 hover:rounded-md ">
                  <CartItem {...item} />
                </div>
              </div>
            </div>
          ))}
          <div className="text-black text-3xl text-center grid place-content-center h-screen">
            {cartQty === 0 ? "سبد خرید خالی است" : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
