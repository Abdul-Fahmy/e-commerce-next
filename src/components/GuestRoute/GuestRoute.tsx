'use client'
import { useAppSelector } from '@/hooks/store.hook'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

export default function GuestRoute({children} : {children: ReactNode}) {
    const user = useAppSelector((state)=> state.userReducer.token)
    const router = useRouter()
  
    useEffect(() => {
        if (user) {
          router.replace('/')
        }
      }, [user, router]);
    
      if (user) return null; // Don't render anything until redirect
    
      return children;
}
