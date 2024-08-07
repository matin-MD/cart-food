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
          <div className="grid text-right pr-10">
            <p>نام</p>
            <span>قیمت</span>
            <div>
              <button className="grid justify-center rounded-md text-md py-0 px-5   shadow-md  hover:shadow-md hover:shadow-blue-400 bg-blue-800  hover:bg-blue-600 items-center place-content-center h-10">
                click
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
