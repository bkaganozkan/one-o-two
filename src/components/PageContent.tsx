import { ReactElement } from "react";
import "../assets/css/pageContent.css"

export interface PageContentInterface {
    title: string,
    imageComponent: ReactElement,
    lowerTitle: string,
    description: string,
}


const PageContent = ({ title, imageComponent, lowerTitle, description }:
    PageContentInterface
) => {

    return (
        <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 mx-auto pt-14 sm:pt-0 ">
            <div className="order-2 flex justify-center sm:order-1 ">
                {imageComponent}
            </div>
            <div className="order-1 sm:order-2 text-center sm:text-right my-auto text-reveal">
                <h3 className="mb-4 font-extrabold uppercase text-base/[19px] text-nowrap text-[#0381FF]">{title}</h3>
                <h2 className="mb-5 font-bold text-[32px]/[40px] sm:text-4xl capitalize text-[#0B122A]" >{lowerTitle}</h2>
                <p className="font-normal  text-lg sm:text-xl/[32px]">{description}</p>
                <button className="mt-8 border-[0.5px] rounded-sm sm:py-[15px] py-[10px] px-[15px] sm:px-[20px] sm:gap-3">
                    <span className="text-center text-[#0B122A] font-normal text-xl/[24px]" >Learn More</span>
                </button>
            </div>
        </div>
    )
}

export default PageContent;