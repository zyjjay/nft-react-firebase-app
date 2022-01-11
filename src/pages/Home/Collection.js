// import { useState, useEffect } from "react"
import "./Collection.css"
import { useFirestore } from "../../hooks/useFirestore"

export default function Collection(props) {

    const { nfts } = props
    const { deleteDocument } = useFirestore('nfts')

    return (
        <ul className="nft-list">
            {nfts.map((nft) => (
                <li key={nft.id} className="nft-item">
                    <div className="title-container">
                        {nft.name}
                        <button className="delete-x" onClick={() => deleteDocument(nft.id)}>x</button>    
                    </div>
                    <img src={nft.image_url} alt="nft" />
                    <p className="nft-description">{nft.symbol}: {nft.current_price}</p>
                    <a target="_blank" href={nft.permalink}>Buy on OpenSea</a>
                    <hr />
                </li>
            ))}
        </ul>
    )
}
