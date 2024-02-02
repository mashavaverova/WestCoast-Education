import { state } from '../utilities/config.js';

export async function fetchData<T>(
    endpoint: string, 
    criteria?: string
): Promise<T> {
    const  baseUrl = state.api.baseUrl; 
    let url: string = '';

    if (criteria) {
        url = `${baseUrl}/${endpoint}?&query=${criteria}`;
    } else {
        url = `${baseUrl}/${endpoint}`;
    }

    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`${response.status} ${response.statusText}`);
        }
    } catch (error) {
        throw new Error(`${error}`);
    }
}