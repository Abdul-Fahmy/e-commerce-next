import { useAppDispatch } from "@/hooks/store.hook";
import { addProductToCart } from "@/store/feature/cart.slice";
import { Product } from "@/types/products.types";
import Image from "next/image";
import Link from "next/link";

export default function Card({ productInfo }: { productInfo: Product }) {
  const dispatch = useAppDispatch()
  return (
    <>
      <div className="card group/card  shadow-lg overflow-hidden rounded-xl">
        <div className="relative w-full ">
          <Image
            src={productInfo.imageCover}
            alt="Product Image"
            priority
            width={0}
            height={0}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="layer group-hover/card:opacity-100 flex justify-center items-center gap-4 absolute w-full h-full left-0 top-0 bg-slate-400 bg-opacity-40 opacity-0 transition-opacity duration-300">
            {/* {wishList === null ? (
              <div
                onClick={() => {
                  addProductToWishList({ productId: id });
                }}
                className={`w-8 h-8 rounded-full bg-yellow-600 text-white flex justify-center items-center cursor-pointer`}
              >
                <i className="fa-solid fa-heart"></i>
              </div>
            ) : (
              <div
                onClick={() => {
                  if (wishList.includes(id)) {
                    removeProductFromWishList({ productId: id });
                  } else {
                    addProductToWishList({ productId: id });
                  }
                }}
                className={`w-8 h-8 rounded-full ${
                  wishList.includes(id) ? "bg-red-600" : "bg-yellow-600"
                }   text-white flex justify-center items-center cursor-pointer`}
              >
                <i className="fa-solid fa-heart"></i>
              </div>
            )} */}
            <div
                onClick={() => {
                  dispatch(addProductToCart(productInfo.id))
                }}
              className="w-8 h-8 rounded-full bg-yellow-600 text-white flex justify-center items-center cursor-pointer"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <Link
              href={`/product/${productInfo.id}`}
              className="w-8 h-8 rounded-full bg-yellow-600 text-white flex justify-center items-center cursor-pointer"
            >
              <i className="fa-regular fa-eye"></i>
            </Link>
          </div>
        </div>
        <div className="card-body space-y-2 px-3 py-2">
          <div className="card-header ">
            <h3 className="text-lg font-semibold text-gray-400 line-clamp-1">
              <Link href={`/product/${productInfo.id}`}>
                {productInfo.title}
              </Link>
            </h3>
            <h2 className="text-sm text-gray-600 ">
              {productInfo.category.name}
            </h2>
          </div>
          <p className="text-green-400 text-sm line-clamp-2">
            {productInfo.description}
          </p>
          <div className="flex justify-between items-center">
            <p>{productInfo.price} EGP</p>
            <div className="rate flex justify-center items-center">
              <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
              <p>{productInfo.ratingsAverage}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
