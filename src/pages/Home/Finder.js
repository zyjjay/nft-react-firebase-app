import { useEffect, useState } from "react"
import { useAPI } from "../../hooks/useAPI"
import { useFirestore } from "../../hooks/useFirestore"
import "./Finder.css"

export default function Finder(props) {

    const { uid } = props
    const [token_id, setToken_id] = useState('')
    const [contract_address, setContract_address] = useState('')
    const { addDocument, response } = useFirestore('nfts')
    const { data, isPending, error } = useAPI(token_id, contract_address)

    const handleSubmit = (e) => {
        e.preventDefault()

        let price_float = Number(data.assets[0].sell_orders[0].current_price).toString() //string
        // console.log(price_float)
        let decimal_point = data.assets[0].sell_orders[0].payment_token_contract.decimals //int
        // console.log(decimal_point)
        let price_float_array = [...price_float]
        // console.log(price_float_array)
        let price_array = []
        let price_string = ''

        for(let i = 0; i < (price_float_array.length-decimal_point); i++) {
            price_array.push(price_float_array[i])
        }
        price_string = price_array.toString().replaceAll(',', '')
        // console.log(price_string)

        addDocument({
            uid,
            current_price: price_string,
            image_url: data.assets[0].image_url,
            name: data.assets[0].name,
            permalink: data.assets[0].permalink,
            symbol: data.assets[0].sell_orders[0].payment_token_contract.symbol,
        })
        // price_float = '' //string
        // decimal_point = 0 //int
        // price_array = []
        // price_float_array = []
        // price_string = ''
    }

    useEffect(() => {
        // console.log(token_id)
        // console.log(contract_address)
        // console.log(data)
        if(response.success) {
            setToken_id('')
            setContract_address('')
        }
    }, [response.success])

    return (
        <div className="finder">
            <h3 className="title">Add an NFT</h3>
            <form onSubmit={handleSubmit}>
                <label className="token-label">
                    <span>Token ID</span>
                    <input 
                        type="text"
                        value={token_id}
                        required
                        onChange={(e) => setToken_id(e.target.value)}
                    />
                </label>

                <label className="address-label">
                    <span>Contract Address</span>
                    <input 
                        type="text"
                        value={contract_address}
                        required
                        onChange={(e) => setContract_address(e.target.value)}
                    />
                </label>
                <br />
                <button>Add to collection</button>
            </form>
            
        </div>
    )
}
