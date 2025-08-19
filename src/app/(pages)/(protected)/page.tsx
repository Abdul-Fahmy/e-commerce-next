"use client";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import Products from "./product/page";
import CategorySlider from "@/components/CategorySlider/CategorySlider";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export default function page() {
  return (
    <>
      <ProtectedRoute>
        <HomeSlider />
        <CategorySlider />
        <Products />
      </ProtectedRoute>
    </>
  );
}
