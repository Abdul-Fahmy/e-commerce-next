"use client";
import { useAppSelector } from "@/hooks/store.hook";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { token } = useAppSelector((s) => s.userReducer);
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => setMounted(true), []);

  const authResolved = status === "authenticated" || status === "unauthenticated";

  useEffect(() => {
    if (!mounted || !authResolved || redirected) return;
    if (!token && status === "unauthenticated") {
      const id = toast.loading("Redirecting to login...");
      setRedirected(true);
      router.replace(`/login?next=${encodeURIComponent(pathname)}`);
      setTimeout(() => toast.dismiss(id), 1200);
    }
  }, [mounted, authResolved, redirected, token, status, router, pathname]);

  if (!mounted || !authResolved) return null; // or a spinner
  if (!token) return null;

  return <>{children}</>;
}
