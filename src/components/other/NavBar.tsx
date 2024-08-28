import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-2 bg-white">
      <div className="flex items-center bg-[#ff3e4c] rounded p-1 text-white">
        <Image
          src="/logo.svg"
          alt="ReJob Logo"
          width={48}
          height={41}
          className="mr-2"
        />
        <Link href="/" className="font-bold text-2xl">
          ReJob
        </Link>
      </div>
      
      <div className="hidden md:flex space-x-4">
        {["Home", "Pricing", "Learn", "FAQ", "Contact"].map((item) => (
          <Link key={item} href={`/${item.toLowerCase()}`} className="font-bold text-[#ff3e4c] hover:underline">
            {item}
          </Link>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        <Link href="/app/auth/login" className="font-bold text-[#ff3e4c] underline">
          Sign in
        </Link>
        <button className="bg-[#ff3e4c] hover:bg-[#ff5766] text-white font-bold py-2 px-4 rounded-full">
          Get Started
        </button>
        <button className="bg-[#ff3e4c] hover:bg-[#ff5766] text-white font-bold py-2 px-4 rounded-full hidden sm:block">
          Try Rejob
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
