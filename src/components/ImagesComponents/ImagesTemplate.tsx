import "../../assets/css/image.css"

const ImageTemplate = ({ imgUrl }: { imgUrl: string }) => {
    return (
        <div className="overflow-hidden relative  sm:w-[610px] w-[384px]  h-[352px] sm:h-[560px]">
            <img className="image-effect" src={imgUrl}
                
            alt="imgUrl" />
        </div>
    )
}

export default ImageTemplate