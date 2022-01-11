import { useFetch } from "./useFetch"

export const useAPI = (token_id, contract_address) => {
    const url = `https://api.opensea.io/api/v1/assets?token_ids=${token_id}&asset_contract_address=${contract_address}&limit=1`
    
    const { data, isPending, error } = useFetch(url)

    

    return { data, isPending, error }
}
