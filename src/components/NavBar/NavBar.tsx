"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/hooks/store.hook";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function NavBar() {
  const token = useAppSelector((state) => state.userReducer.token);
  const router = useRouter();
  const [isUserHidden, setIsUserHidden] = useState("hidden");

  const [isMenuHidden, setIsMenuHidden] = useState("hidden");
  const handleUserOpen = () => {
    setIsUserHidden("visible");
  };
  const handleUserClose = () => {
    setIsUserHidden("hidden");
  };

  const handleMenuOpen = () => {
    setIsMenuHidden("visible");
  };
  const handleMenuClose = () => {
    setIsMenuHidden("hidden");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
      // router.push("/login");
      toast.success("logged out successfully");
      window.location.reload()
    
  };

  return (
    <>
      <div className="nav py-3 shadow bg-slate-100 fixed top-0 left-0 right-0 z-50">
        <div className="container flex items-center gap-10 px-3">
          <Link href={"/"}>
            <Image
              className="min-w-[150px]"
              src='/assets/freshcart-logo.svg'
              alt="FreshCart Logo"
              style={{width:'100',height:'auto'}}
              width={0}
              height={0}
              priority
            />
          </Link>

          {token && (
            <>
              <ul className="hidden  md:flex  items-center gap-5">
                <li>
                  <Link
                    className={`relative before:absolute before:w-0 before:h-0.5 before:bg-green-600 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1
                       
                      `}
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`relative before:absolute before:w-0 before:h-0.5 before:bg-green-600 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 
                       
                      `}
                    href={"/"}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    className={`relative before:absolute before:w-0 before:h-0.5 before:bg-green-600 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 
                       
                      `}
                    href={"/"}
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    className={`relative before:absolute before:w-0 before:h-0.5 before:bg-green-600 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 
                       
                      `}
                    href={"/"}
                  >
                    Brands
                  </Link>
                </li>
                <li>
                  <Link
                    className={`relative before:absolute before:w-0 before:h-0.5 before:bg-green-600 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 
                       
                      `}
                    href={"/"}
                  >
                    Orders
                  </Link>
                </li>
              </ul>
              <Link
                href={"/"}
                className="hidden lg:inline-block cart cursor-pointer ml-auto relative"
              >
                <i className="fa-solid fa-cart-shopping text-lg"></i>
                <div className="cart-counter absolute h-5  w-5 rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-green-600 text-white flex justify-center items-center ">
                  <i className="fa-solid fa-spinner fa-spin"></i>
                </div>
              </Link>
              <Link
                href={"/"}
                className="hidden lg:inline-block cart cursor-pointer  relative"
              >
                <i className={` fa-solid fa-heart text-lg text-red-600`}></i>
                <div className="cart-counter absolute h-5  w-5 rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-green-600 text-white flex justify-center items-center ">
                  <i className="fa-solid fa-spinner fa-spin"></i>
                </div>
              </Link>
            </>
          )}
          <ul
            className={`hidden lg:flex items-center gap-5 ${
              !token && "ml-auto"
            }`}
          >
            <li>
              <Link href={"/"}>
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <i className="fa-brands fa-tiktok"></i>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </li>
          </ul>

          <ul className="flex items-center gap-5 ml-auto md:m-0 ">
            {!token && (
              <>
                <li>
                  <Link
                    className={`relative before:absolute before:w-0 before:h-0.5 before:bg-green-600 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 
                      
                     `}
                    href={"/signup"}
                  >
                    Signup
                  </Link>
                </li>
                <li>
                  <Link
                    className={`relative before:absolute before:w-0 before:h-0.5 before:bg-green-600 hover:before:w-full before:transition-[width] before:duration-300 before:left-0 before:-bottom-1 
                      
                     `}
                    href={"/login"}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
            {token && (
              <>
                <div
                  onClick={() => {
                    if (isUserHidden === "hidden") {
                      handleUserOpen();
                      handleMenuClose();
                    } else {
                      handleUserClose();
                    }
                  }}
                  className=" cursor-pointer w-8 h-8  rounded-full bg-gray-700 text-white flex justify-center items-center relative"
                >
                  <i className="fa-solid fa-user"></i>

                  <div
                    className={`absolute bg-slate-100 top-10 z-50 w-52 right-0 md:right-0 rounded-md ${isUserHidden} `}
                  >
                    <ul className="flex flex-col justify-center items-center gap-3 text-slate-700">
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2  ">
                        <Link href={"/"}>WishList</Link>
                      </li>
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2">
                        <Link href={"/"}>Cart</Link>
                      </li>
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2">
                        <Link href={"/"}>Change your password</Link>
                      </li>

                      <li>
                        <Link href={"/login"} className="mb-3 inline-block ">
                          <i
                            onClick={handleLogOut}
                            className="fa-solid fa-right-from-bracket text-lg"
                          ></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  onClick={() => {
                    if (isMenuHidden === "hidden") {
                      handleMenuOpen();
                      handleUserClose();
                    } else {
                      handleMenuClose();
                    }
                  }}
                  className="border-solid border border-slate-400 rounded px-2 py-1 relative md:hidden"
                >
                  <i className="fa-solid fa-bars"></i>
                  <div
                    className={`absolute bg-slate-100 top-10 z-50 w-52 right-0 md:right-0 rounded-md ${isMenuHidden} `}
                  >
                    <ul className="flex flex-col justify-center items-center gap-3 text-slate-700">
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2  ">
                        <Link href={"/"}>Home</Link>
                      </li>
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2">
                        <Link href={"/"}>Products</Link>
                      </li>
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2">
                        <Link href={"/"}>Categories</Link>
                      </li>
                      <li className="border-solid border-b border-slate-600 w-full text-center py-2">
                        <Link href={"/"}>Brands</Link>
                      </li>

                      <li>
                        <Link href={"/"}>Orders</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
