import BannerImage from "../../assets/banner1.jpeg";
 
function Banner() {

    return (

        <div className="w-full h-[25rem] relative">

            <img
                src={BannerImage}
                className="h-full w-full"
            />
            
            <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">
                <div className="flex flex-col gap-4">
                    <div className="font-semibold text-4xl text-center text-white ">
                        The CryptoVerse
                    </div>
                    <div className="font-semibold text-white text-center text-sm">
                        All of Crypto, in one clear view.
                    </div>
                </div>
            </div>

        </div>

    )

}
export default Banner;