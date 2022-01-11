import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { useEffect } from "react";
import "./Home.css"
import Collection from "./Collection";
import Finder from "./Finder";

export default function Home() {
    
    const { user } = useAuthContext()
    const { documents, error } = useCollection(
        "nfts",
        ["uid", "==", user.uid],
        null
    )

    useEffect(() => {
        console.log(documents)
    }, [documents])


    return (
        <div className="container-grid">
            <div className="nft-collection">
                {error && <p>{error}</p>}
                {documents && <Collection nfts={documents} />}
            </div>

            <div className="find-nft">
                <Finder uid={user.uid} />
            </div>
        </div>
    )
}
