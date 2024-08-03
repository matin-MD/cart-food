function Product() {
  return (
    <div className="grid justify-center items-center content-center pt-28">
      <div className="transition rounded-lg ">
        <div className="transition-all  text-right pb-2 border-2 hover:border-2 border-neutral-700 hover:text-white text-white hover:border-neutral-900  bg-neutral-700  hover:bg-black active:bg-neutral-700 rounded-lg ">
          <img
            src="src/assets/images/Screenshot_20230624_215528_BolBol Jan.jpg"
            className="h-40 w-full rounded-t-lg "
          />
          <p className="p-2 flex text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          </p>
          <div className="pr-4 pb-2">نامحصول</div>
          <span className=" pr-4">قیمت: $22</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
