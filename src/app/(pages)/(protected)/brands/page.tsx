'use client'
import Loading from "@/components/Loading/Loading";
import { Brand } from "@/types/brands.types";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Brands() {
  const [brands, setBrands] = useState<Brand[] | null>(null);
  const router = useRouter()
  async function getAllBrands() {
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/brands",
        method: "GET",
      };
      const { data } = await axios.request(options);
      console.log(data);
      
      setBrands(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllBrands();
  }, []);

  return (
    <>
      {brands ? (
        <section>
          <div
           className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-4 md:px-0">
            {brands.map((brand) => (
              <div
              onClick={()=>{
                router.push(`/brands/${brand._id}`)

              }}
                key={brand._id}
                className="category-item border-solid border-2 border-gray-400 border-opacity-30 rounded-md overflow-hidden cursor-pointer"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={brand.image}
                  alt=""
                />
                <div className="title text-center my-4">
                  <Link
                    href={`/brand/${brand._id}`}
                    className="text-gray-500 font-semibold text-2xl"
                  >
                    {brand.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
