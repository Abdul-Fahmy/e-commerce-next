"use client";
import { useParams } from "next/navigation";
// import Card from "@/components/Card/Card";
// import Loading from "@/components/Loading/Loading";
// import { useAppDispatch, useAppSelector } from "@/hooks/store.hook";
// import {
//     getProductDetails,
//     getRelatedProducts,
// } from "@/store/feature/products.slice";
// import { useParams } from "next/navigation";
// import React, { useEffect } from "react";
// import ReactImageGallery from "react-image-gallery";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Params = {
    productId: string;
};

export default function ProductDetails() {
    const { productId } = useParams<Params>();
    //   const dispatch = useAppDispatch();
    //   const productDetails = useAppSelector(
    //     (store) => store.productsReducer.product
    //   );
    //   const relatedProducts = useAppSelector(
    //     (store) => store.productsReducer.relatedProducts
    //   );
    //   useEffect(() => {
    //     dispatch(getProductDetails(productId));
    //   }, []);

    //   useEffect(() => {
    //     if (productDetails === null) return;

    //     dispatch(getRelatedProducts(productDetails.category._id));
    //   }, [productDetails]);

    // }
    return (
        <>
            <p>{productId}</p>
        </>
    );
}

// return (
//     <>
//       {productDetails ? (
//         <>
//           <section className="md:grid md:grid-cols-12 md:gap-10 p-3 md:p-0">
//             <div className="col-span-4">
//               <ReactImageGallery
//                 showNav={false}
//                 showPlayButton={false}
//                 items={productDetails.images.map((image) => {
//                   return {
//                     original: image,
//                     thumbnail: image,
//                   };
//                 })}
//               />
//             </div>

//             <div className="col-span-8 space-y-4">
//               <div>
//                 <h2 className="text-2xl font-semibold text-gray-500">
//                   {productDetails.title}
//                 </h2>
//                 <h3 className="text-yellow-300">
//                   {productDetails.category.name}
//                 </h3>
//               </div>
//               <p className="text-gray-400">{productDetails.description}</p>
//               <div className=" flex justify-between items-center">
//                 <span>{productDetails.price} L.E</span>
//                 <div className="">
//                   <i className="fa-solid fa-star text-yellow-300 mr-2"></i>
//                   <span>{productDetails.ratingsAverage}</span>
//                 </div>
//               </div>
//               <button
//                 // onClick={() => {
//                 //   addProductToCart({ productId: id });
//                 // }}
//                 className="btn bg-green-600 hover:bg-green-700 transition-colors duration-300 font-semibold w-full"
//               >
//                 Add To Cart
//               </button>
//             </div>
//           </section>

//           <section>
//             <h2 className="my-6 font-semibold text-2xl text-gray-600">
//               Related Products
//             </h2>
//             {relatedProducts ? (
//               <Swiper
//                 breakpoints={{
//                   320: {
//                     slidesPerView: 1,
//                   },
//                   480: {
//                     slidesPerView: 3,
//                   },
//                   640: {
//                     slidesPerView: 3,
//                   },
//                   860: {
//                     slidesPerView: 4,
//                   },
//                 }}
//                 spaceBetween={20}
//                 loop={true}
//               >
//                 {relatedProducts.map((product) => (
//                   <SwiperSlide  key={product.id}>
//                     <Card productInfo={product} />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             ) : (
//               <Loading />
//             )}
//           </section>
//         </>
//       ) : (
//         <Loading />
//       )}

//     </>
//   );
