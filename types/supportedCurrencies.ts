export interface currenciesProps {
    currencyGroup: string;
    color: string;
    currencySymbol: string;
    name: string;
    logo: string;
    decimal_point: number;
    listingDate: string;
    wallets: wallet[];
}

export type wallet = {
    currencyGroup: string,
    tokenSymbol: string,
    decimal_point: number,
    tokenType: string,
    blockchain: string,
    explorer: string,
    listingDate: string,
    blockchainName: string,
    logo: string

}

export interface priceChangesProp {

    pair: string;
    latestPrice: string;
    day: string;
    week: string;
    month: string;
    year: string;
}
