"use client";

import Card from "@/components/Card/Card";
import Loading from "@/components/Loading/Loading";
import { useAppDispatch, useAppSelector } from "@/hooks/store.hook";
import { getCartInfo } from "@/store/feature/cart.slice";
import { getProducts } from "@/store/feature/products.slice";
import { Product } from "@/types/products.types";
import { useEffect } from "react";

export default function Products() {
  const products = useAppSelector((store) => store.productsReducer.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCartInfo())
  }, []);
  return (
    <>
      <section className=" p-3 md:p-0 my-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {products ? (
          products.map((product: Product) => (
            <Card key={product._id} productInfo={product} />
          ))
        ) : (
          <Loading />
        )}
      </section>
    </>
  );
}
