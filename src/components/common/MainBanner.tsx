const MainBanner: React.FC = () => {
    return (
        <div className="mt-20">
            <div className="float-left mr-4 pb-4">
                <div
                    className="w-[65px] h-[65px] rounded-full border-2 border-gray-100"
                    style={{
                        backgroundImage: `url(${'/sajidur.png'})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                ></div>
            </div>
            <div className="">
                <h3 className="leading-none text-2xl font-semibold">
                    Sajidur Rahman Shajib
                </h3>
                <p className="text-sm mt-2 leading-tight">
                    Sr. Softwarer Engineer | Proficient in Javascript & Python |
                    Ready to elevate your brand
                </p>
            </div>
        </div>
    )
}

export default MainBanner
