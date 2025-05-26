import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
function Navbar() {
  const { cartQty, handleLogout } = useShoppingCartContext();
  return (
    <div className="grid bg-orange-700 text-white">
      <div className="flex justify-between flex-row-reverse px-2 pt-2 sm:px-5 md:px-28 lg:px-28 xl:px-28  border-black pb-2">
        <ul className="flex">
          <li className="px-3 place-content-center">
            <Link to="/">فروشگاه</Link>
          </li>
        </ul>
        <div className="flex">
          <button
            className="mr-5  text-white px-2 py-1 rounded-md bg-red-600 border-red-800 border-2 hover:bg-red-600"
            onClick={handleLogout}
          >
            LogOut
          </button>
          <Link to="/cart">
            <button className=" flex items-center text-center border border-orange-800 bg-orange-500  hover:bg-neutral-950 p-1 rounded-md ">
              <span className="pl-2 bg-green-600 text-white text-lg rounded-md px-2 text-center justify-center ">
                {cartQty !== 0 ? cartQty : " خالی است"}
              </span>
              <i className="mx-2 text-black">
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
