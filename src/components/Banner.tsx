import banner from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <section className="container mx-auto mt-16 px-4 sm:mt-20 `lg:mt-[140px]` ">
            <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-8">
                <div className="flex-1 text-center lg:text-left">
                <h2 className="mb-5 text-4xl font-extrabold leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl ">Build Your Ideal  <br></br> <span className=" bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h2>
                <p className="mx-auto max-w-xl text-sm leading-6 text-gray-600 sm:text-base lg:mx-0">
                    Explore frontend, backend, database, and tooling options, < br /> compare them side by side, and put together the stack that fits your <br /> next project.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                    <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-3 font-semibold text-white">Explore Technologies</button>
                    <button className="rounded-lg border border-gray-200 bg-white px-10 py-3 text-gray-700">Learn More</button>
                </div>
            </div>

            <div className="flex flex-1 justify-center ">
                <img src={banner} alt="" className="w-full `max-w-[420px]` object-contain `sm:max-w-[480px] lg:max-w-[520px]`" />
                </div>
            </div>
        </section>
    );
};

export default Banner;