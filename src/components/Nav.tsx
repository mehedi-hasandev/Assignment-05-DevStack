import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white py-4 shadow-sm">
      <div className="Container mx-auto flex items-center justify-between px-4">
        <button
          className="md:hidden text-2xl text-[#475569] focus:outline-none cursor-pointer"
          aria-label="Menu"
        >
          ☰
        </button>

        <div className="flex items-center">
          <img src={logo} alt="Dev-Stack" className="w-24 sm:w-28 cursor-pointer" />
        </div>

        <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-[#475569] font-medium">
          <li className="text-[#DB2777] cursor-pointer transition-colors hover:text-[#DB2777]">Home</li>
          <li className="cursor-pointer transition-colors hover:text-[#DB2777]">Technologies</li>
          <li className="cursor-pointer transition-colors hover:text-[#DB2777]">Projects</li>
          <li className="cursor-pointer transition-colors hover:text-[#DB2777]">About</li>
          <li className="cursor-pointer transition-colors hover:text-[#DB2777]">Contact</li>
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-[#475569] cursor-pointer transition-colors hover:text-[#DB2777]">
            Sign In
          </p>
          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;