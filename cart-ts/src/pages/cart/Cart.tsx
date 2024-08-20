import { Link } from "react-router-dom";
import CartItem from "../../components/cartItem/CartItem";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
function Cart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <div className="px-28 py-5">
      <div className="gap-24 grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols- 2xl:grid-cols-2  ">
        {cartItems.map((item) => (
          <div style={{ width: "700px" }}>
            <div className="border-b bg-neutral-700 rounded-lg grid justify-center hover:bg-neutral-800 hover:rounded-md ">
              <Link to={`/product/${item.id}`}>
                <CartItem {...item} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
