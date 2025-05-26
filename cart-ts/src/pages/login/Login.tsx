import { ChangeEvent, useState } from "react";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Login() {
  const { handleLogin } = useShoppingCartContext();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="flex items-center bg-white justify-center h-screen place-content-center pb-40 ">
      <div className="bg-red-500  p-10 rounded grid w-3/4 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5  transition hover:shadow-black shadow-md">
        <input
          type="text"
          placeholder="نام کاربری"
          name="username"
          value={user.username}
          onChange={handleChange}
          className="w-full p-2 rounded text-right"
        />
        <input
          type="password"
          placeholder="رمز ورود"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="w-full p-2 mt-5 rounded text-right"
        />
        <div className="grid place-content-center">
          <button
            onClick={() => handleLogin(user.username, user.password)}
            className="bg-white max-w-fit px-10 py-2 justify-center flex items-center place-content-center mt-5 rounded  "
          >
            ورود
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
