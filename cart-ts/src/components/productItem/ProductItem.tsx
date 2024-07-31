function ProductItem() {
  return (
    <div className="transition-all  hover:shadow-blue-600 hover:shadow-md rounded-lg">
      <div className="transition-all h-80 bg-white rounded-lg shadow-inner hover:shadow-lg  border-none hover:border-white">
        <img
          src="src/assets/images/Screenshot_20230624_215528_BolBol Jan.jpg"
          className="h-60 w-full rounded-t-lg"
        />
      </div>
    </div>
  );
}

export default ProductItem;
