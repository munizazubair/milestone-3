import Link from "next/link"
export default function Header() {
    return(
        <div>
            <div className="h-[35px] lg:h-[50px] text-md sm:text-lg flex justify-center items-center text-white bg-neutral-500 gap-2.5 md:gap-5">
                <div className="md:h-3 md:w-3 h-1 w-1 bg-black rounded-full">
                </div>
                <div className="text-[16px] md:text-lg lg:text-[20px]  font-semibold font-serif text-black "><span className="text-white">Frame</span>World</div>
                <div className="md:h-3 md:w-3 h-1 w-1 bg-black rounded-full">
                    </div>
                                </div>
        </div>
    )
}