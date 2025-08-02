'use client'
import Card from "@/components/Card/Card";
import Loading from "@/components/Loading/Loading";
import ProtectedRoutes from "@/components/ProtectedRoutes/ProtectedRoutes";
import { useAppDispatch, useAppSelector } from "@/hooks/store.hook";
import { getProducts } from "@/store/feature/products.slice";
import { Product } from "@/types/products.types";
import { useEffect } from "react";

export default  function  Home() {
const products = useAppSelector((store)=> store.productsReducer.product)
const dispatch = useAppDispatch();

useEffect(()=>{
  dispatch(getProducts())
},[])

  return (
    <>
   <ProtectedRoutes>
     <div className=" "> 
      <h1 className="text-3xl text-center bg-slate-100 p-5 my-6">Fresh Cart</h1>
      <div className="p-3 md:p-0 my-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {products ? products.map((product:Product)=> <Card key={product._id} productInfo={product} />) : <Loading />}
      </div>
     </div>
   </ProtectedRoutes>
    </>
  );
}
