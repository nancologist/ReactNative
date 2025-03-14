const GOOGLE_API_KEY = 'AIzaSyAvptuTLW059LrFtxRpznmYQFLBveJD4KI';

export function createMapPreviewUrl(latitude: number, longitude: number) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`
}