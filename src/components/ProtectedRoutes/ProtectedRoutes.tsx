"use client";
import { useAppSelector } from "@/hooks/store.hook";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function ProtectedRoutes({ children }: { children: ReactNode }) {
  const user = useAppSelector((store) => store.userReducer.token);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null; // Don't render anything until redirect

  return children;
}
