

import ProtectedRoutes from "@/components/ProtectedRoutes/ProtectedRoutes";

import Products from "./(pages)/product/page";

export default function Home() {


  return (
    <>
      <ProtectedRoutes>
        <h1 className="text-3xl text-center bg-slate-100 p-5 my-6">
          Fresh Cart
        </h1>
        <Products />
      </ProtectedRoutes>
    </>
  );
}
