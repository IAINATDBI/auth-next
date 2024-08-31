'use client'

import Link from "next/link";
import Image from "next/image";
import { logout } from "@/actions/logout";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = async () => {
    await logout();
    router.refresh();
    router.push('/auth/login');
  };

  const isLoggedIn = status === "authenticated";
  const isLoading = status === "loading";
  const isDashboard = pathname === "/rejob/dash";
  const isLoginPage = pathname === "/auth/login";

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-2 bg-white">
      <div className="flex items-center bg-[#ff3e4c] rounded p-1 text-white">
        <Link href={isLoggedIn ? "/rejob/dash" : "/"} className="flex items-center">
          <Image
            src="/logo.svg"
            alt="ReJob Logo"
            width={48}
            height={41}
            className="mr-2"
          />
          <span className="font-bold text-2xl">ReJob</span>
        </Link>
      </div>
      
      <div className="hidden md:flex space-x-4">
        {["Home", "Pricing", "Learn", "FAQ", "Contact"].map((item) => (
          <Link 
            key={item} 
            href={item === "Home" && isLoggedIn ? "/rejob/dash" : item === "Contact" ? "/contact" : `/${item.toLowerCase()}`} 
            className="font-bold text-[#ff3e4c] hover:underline"
          >
            {item}
          </Link>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        {!isLoading && !isLoginPage && (
          isLoggedIn ? (
            <>
              <button 
                onClick={handleLogout}
                className="bg-[#ff3e4c] hover:bg-[#ff5766] text-white font-bold py-2 px-4 rounded-full"
              >
                Logout
              </button>
              {!isDashboard && (
                <Link href="/rejob/pricing" className="bg-[#ff3e4c] hover:bg-[#ff5766] text-white font-bold py-2 px-4 rounded-full">
                  Pricing
                </Link>
              )}
            </>
          ) : (
            <Link href="/auth/login" className="bg-[#ff3e4c] hover:bg-[#ff5766] text-white font-bold py-2 px-4 rounded-full">
              Sign in
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default NavBar;
