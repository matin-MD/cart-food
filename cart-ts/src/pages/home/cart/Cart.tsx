import CartItem from "../../../components/cartItem/CartItem";
function Cart() {
  return (
    <div>
      <div className="grid place-content-center justify-center py-5">
        <div className="border-b w-96 grid justify-center">
          <CartItem />
        </div>
        <div className="border-b w-96 grid justify-center">
          <CartItem />
        </div>
        <div className="border-b w-96 grid justify-center">
          <CartItem />
        </div>
        <div className=" w-96 grid justify-center">
          <CartItem />
        </div>
      </div>
    </div>
  );
}

export default Cart;
