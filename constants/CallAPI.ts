import Constants  from "expo-constants";
export async function callApi<T>(url: string, method: string, body?: any): Promise<T> {
    const response = await fetch(`${Constants.expoConfig?.extra?.BASE_URL}/${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error(`API call failed: ${response.status}`);
    }

    const data = await response.json() as T;
    return data;
}