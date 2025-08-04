import { useAppDispatch } from "@/hooks/store.hook";
import { removeItemFromCart, updateProductCount } from "@/store/feature/cart.slice";
import { CartProductItem } from "@/types/cartInfo.types";
import Link from "next/link";

export default function CartItem({cartInfo}:{cartInfo:CartProductItem}) {
    const dispatch = useAppDispatch()
  return (
    <>
      <div className="flex gap-2">
        <div className="card-item md:grow flex flex-wrap justify-between items-center bg-gray-100 py-4 px-6 rounded-lg gap-3">
          <img
            className="w-24 h-24 object-cover rounded-full border-4 border-white"
            src={cartInfo.product.imageCover}
            alt={cartInfo.product.title}
          />
          <Link
            href={`/product/${cartInfo.product.id}`}
            className="text-lg text-gray-700 font-semibold"
          >
            {cartInfo.product.title}
          </Link>
          <h4 className="text-gray-500 font-semibold">{cartInfo.product.category.name}</h4>
          <div className="count flex items-center gap-5 my-3 md:my-0">
            <span className="text-xl font-bold text-gray-500">{cartInfo.count}</span>
            <div className="icons  space-y-2">
              <div
                onClick={() => {
                  dispatch(updateProductCount({productId:cartInfo.product.id, count:cartInfo.count + 1}))
                }}
                className="plus cursor-pointer w-8 h-8 rounded-full bg-gray-700 text-white flex justify-center items-center"
              >
                <i className="fa-solid fa-plus"></i>
              </div>
              <div
                onClick={() => {
                  dispatch(updateProductCount({productId:cartInfo.product.id, count:cartInfo.count - 1}))
                }}
                className="minus cursor-pointer w-8 h-8 rounded-full bg-gray-700 text-white flex justify-center items-center"
              >
                <i className="fa-solid fa-minus"></i>
              </div>
            </div>
          </div>
          <span>{cartInfo.price}LE</span>
        </div>
        <button
          onClick={() => {
            dispatch(removeItemFromCart(cartInfo.product.id))
          }}
          className="bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition-colors duration-300"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </>
  )
}
