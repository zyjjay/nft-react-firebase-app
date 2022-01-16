import "./Vision.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export default function Vision() {
    return (
        <>
            <div className="welcome-page">
                <h3>
                    Welcome to NFTracker
                </h3>
                <p style={ {fontStyle: "italic", color: "grey"} }>
                    Powered By the OpenSea API
                </p>

                <div className="content">
                    <Carousel className="carousel" autoPlay="true" interval="7000" infiniteLoop="true" showThumbs={false} width="35%">
                        <div>
                            <img src="https://lh3.googleusercontent.com/IDwnhttw3NRmKl3-n0EBjxaqW44v3zniDXeuJ81T6YEsQ2cNgEJbdZKNpRV2vPAgT7u05AQhF98UN6fH1gNn7hQUeAwSu4KiYtSdgg=w600" alt="nft-1" />
                            {/* <p>PHANTA BEAR</p> */}
                        </div>
                        <div>
                            <img src="https://lh3.googleusercontent.com/bta6Z9f3nTllFDHDfKRe6oe99JJ0hlF09Mt_-twvs_Rmazzf0mkiSEJi-x1iyqDeE8-AQ0eYlqlMoGy-4_WdR6UbtqvH4FvMRGUA=w600" alt="nft-2" />
                            {/* <p>DOODLES</p> */}
                        </div>
                        <div>
                            <img src="https://lh3.googleusercontent.com/HSfcLMGJG2onm4SP3pmjsHZpVrKd89SME9PCwOLxbEH_kcHg1eisIZMFCHcreylzEj277nxuvCSlTF7hRfy8cqdW_wRiuqDgJNBJEq8=w600" alt="nft-3" />
                            {/* <p>CRYPTOPUNKS</p> */}
                        </div>
                    </Carousel>

                    <p>Are you having a hard time following the prices of all the NFTs you want?</p>
                    <p>Look no further because NFTracker allows you to store all your wanted NFTs into one place!</p>
                    <p>Sign up for an account today and start tracking!</p>
                </div>
            </div>
        </>
    )
}