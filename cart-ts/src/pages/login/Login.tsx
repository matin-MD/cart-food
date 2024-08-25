import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Login() {
const{handleLogin}=useShoppingCartContext()
  return (
    <div className="flex items-center justify-center h-screen place-content-center pb-40 ">
      <div className="bg-teal-700 p-10 rounded grid w-3/4 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 hover:bg-teal-500 transition hover:shadow-black shadow-md">
        <input
          type="text"
          placeholder="نام کاربری"
          name="username"
          className="w-full p-2 rounded text-right"
        />
        <input
          type="password"
          placeholder="رمز ورود"
          name="password"
          className="w-full p-2 mt-5 rounded text-right"
        />
        <div className="grid place-content-center">
          <button
          onClick={handleLogin}
            className="bg-white max-w-fit px-10 py-2 justify-center flex items-center place-content-center mt-5 rounded  "
          >ورود
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
