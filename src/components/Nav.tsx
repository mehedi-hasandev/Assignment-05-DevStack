import logo from "../assets/logo-text.png"

const Nav = () => {
    return (
        <nav className=" sticky top-0 z-50 bg-white py-5 mt-7 mb-7 ">
            <div className="container mx-auto flex items-center justify-between px-4">
                <img src={logo} alt="Dev-Stack" className="w-24 sm:w-28" />

                <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-sm   text-[#475569] font-medium ">
                    <li className="text-[#DB2777]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="hidden md:flex items-center gap-3">
                    <p className="text-sm text-[#475569]">Sing in</p>
                    <button className="rounded-full bg-[#D91B7E] px-5 py-2 text-sm font-semibold text-white">Sing Up</button>
                </div>
                {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-[#475569]">
          ☰
        </button>
            </div>
        </nav>
    );
};

export default Nav;