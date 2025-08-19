"use client";

import Card from "@/components/Card/Card";
import Loading from "@/components/Loading/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReactImageGallery from "react-image-gallery";
import { Product } from "@/types/products.types";

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailsClient({
  product,
  relatedProducts,
}: Props) {
  return (
    <>
      <section className="md:grid md:grid-cols-12 md:gap-10 p-3 md:p-0">
        <div className="col-span-4">
          <ReactImageGallery
            showNav={false}
            showPlayButton={false}
            items={product.images.map((image) => ({
              original: image,
              thumbnail: image,
            }))}
          />
        </div>

        <div className="col-span-8 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-500">
              {product.title}
            </h2>
            <h3 className="text-yellow-300">{product.category.name}</h3>
          </div>
          <p className="text-gray-400">{product.description}</p>
          <div className="flex justify-between items-center">
            <span>{product.price} L.E</span>
            <div>
              <i className="fa-solid fa-star text-yellow-300 mr-2"></i>
              <span>{product.ratingsAverage}</span>
            </div>
          </div>
          <button className="btn bg-green-600 hover:bg-green-700 transition-colors duration-300 font-semibold w-full">
            Add To Cart
          </button>
        </div>
      </section>

      <section>
        <h2 className="my-6 font-semibold text-2xl text-gray-600">
          Related Products
        </h2>
        {relatedProducts?.length ? (
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 3 },
              640: { slidesPerView: 3 },
              860: { slidesPerView: 4 },
            }}
            spaceBetween={20}
            loop={true}
          >
            {relatedProducts.map((product) => (
              <SwiperSlide key={product._id}>
                <Card productInfo={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
}
