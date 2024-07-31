import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="grid bg-neutral-900 text-white">
      <div className="flex justify-between flex-row-reverse px-5 pt-2  sm:px-5 md:px-28 lg:px-28 xl:px-28 border border-black pb-2">
        <ul className="flex">
          <li className="px-5 place-content-center">
            <Link to="/">خانه</Link>
          </li>
          <li className="place-content-center">
            <Link to="/store">فروشگاه</Link>
          </li>
        </ul>
        <div>
          <button className=" flex items-center text-center border bg-neutral-700 border-neutral-500 hover:bg-neutral-900 p-1 rounded-md ">
            <span className="mx-1">
              <FaCartShopping />
            </span>
            سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
