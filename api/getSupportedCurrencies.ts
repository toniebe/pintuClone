import { callApi } from "../constants/CallAPI";
import { payloadSupportCurrenciesResponse } from "../types/payloadResponse";



export async function getSupportedCurrencies() {
    return await callApi<payloadSupportCurrenciesResponse>('wallet/supportedCurrencies', 'GET')
}