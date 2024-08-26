import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
function Navbar() {
  const { cartQty, handleLogout } = useShoppingCartContext();
  return (
    <div className="grid bg-neutral-700 text-white">
      <div className="flex justify-between flex-row-reverse px-5 pt-2 sm:px-5 md:px-28 lg:px-28 xl:px-28  border-black pb-2">
        <ul className="flex">
          <li className="px-5 place-content-center">
            <Link to="/">خانه</Link>
          </li>
          <li className="place-content-center">
            <Link to="/store">فروشگاه</Link>
          </li>
        </ul>
        <div className="flex">
          <button
            className="mr-5 text-red-600 hover:text-white px-2 py-1 rounded-md bg-neutral-700 border-red-600 border-2 hover:bg-red-600"
            onClick={handleLogout}
          >
            LogOut
          </button>
          <Link to="/cart">
            <button className=" flex items-center text-center border bg-neutral-700 border-neutral-500 hover:bg-neutral-950 p-1 rounded-md ">
              <span className="pl-2 bg-teal-400 text-black text-lg rounded-md px-2 text-center justify-center ">
                {cartQty !== 0 ? cartQty : " خالی است"}
              </span>
              <i className="mx-2">
                <FaCartShopping />
              </i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
