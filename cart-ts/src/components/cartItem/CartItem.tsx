function CartItem() {
  return (
    <>
      <div className="py-5">
        <div className=" w-60  flex flex-row-reverse justify-center  text-white ">
          <img
            className="rounded-md"
            src="src/assets/images/Screenshot_20230624_215528_BolBol Jan.jpg"
            alt=""
          />
          <div className="grid text-center pr-10">
            <div className="grid justify-center">
              <p>نام</p>
              <span>قیمت</span>
            </div>
            <div>
              <div className="flex justify-center py-2 ">
                <button className=" w-8 h-8 bg-green-600 hover:bg-green-500 rounded-md ">
                  +
                </button>
                <span className="mx-2 grid  items-center">0</span>
                <button className=" w-8 h-8 bg-red-600 hover:bg-red-500 rounded-md">
                  -
                </button>
              </div>
              <button className="grid justify-center rounded-md text-md py-0 px-5 text-md shadow-md hover:shadow-md hover:shadow-yellow-200 bg-yellow-500  hover:bg-yellow-500 items-center place-content-center h-10">
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
