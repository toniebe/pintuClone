import { currenciesProps, priceChangesProp } from "./supportedCurrencies";

export interface payloadSupportCurrenciesResponse {
    code: string;
    message: string;
    payload: currenciesProps[];
}

export interface payloadPriceChange {
    code: string;
    message: string;
    payload: priceChangesProp[];
}