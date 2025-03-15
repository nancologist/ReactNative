import {Location} from "./screens/Map";

const GOOGLE_API_KEY = 'AIzaSyAvptuTLW059LrFtxRpznmYQFLBveJD4KI';

export function createMapPreviewUrl(latitude: number, longitude: number) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`
}

// Reverse geocoding:
export async function convertLocationToAddress({latitude, longitude}: Location): Promise<string> {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
    const response = await fetch(url);
    if (!response.ok) throw new Error('Fetch failed!')
    const data = await response.json()
    return data.results[0].formatted_address;
}