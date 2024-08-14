import { IProducts } from "../../types/server";

type TProductItem = IProducts;

function ProductItem({ image, title, price, description }: TProductItem) {
  return (
    <>
      <div className="transition rounded-lg">
        <div className="transition-all  text-right pb-2 border-2 hover:border-2 border-neutral-700 hover:text-white text-white hover:border-neutral-900  bg-neutral-700  hover:bg-black active:bg-neutral-700 rounded-lg ">
          <img src={image} className="h-40 w-full rounded-t-lg " />
          <div className="text-left">
            <div className="pl-3 pt-3 text-lg">{title}</div>
            <p className="pl-3 pt-3 line-clamp-1">{description}</p>
            <div className="pl-3 pt-3">price : ${price}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
