import { callApi } from "../constants/CallAPI";
import { payloadPriceChange } from "../types/payloadResponse";



export async function getPriceChange() {
    return await callApi<payloadPriceChange>('trade/price-changes', 'GET')
}