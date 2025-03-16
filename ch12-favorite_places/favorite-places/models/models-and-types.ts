export class Place {
    private readonly _id: number;
    private _title: string;
    private _imageUri: string;
    private _address: string;
    private _location: Location;

    constructor(id: number, title: string, imageUri: string, {address, latitude, longitude}: LocationWithAddress) {
        this._id = id;
        this._title = title;
        this._imageUri = imageUri;
        this._address = address;
        this._location = {latitude, longitude};
    }


    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get imageUri(): string {
        return this._imageUri;
    }

    set imageUri(value: string) {
        this._imageUri = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }

    public static convertFromDAO(dao: PlaceDAO): Place {
        return new Place(
            dao.id,
            dao.title,
            dao.image_uri,
            {
                latitude: dao.latitude,
                longitude: dao.longitude,
                address: dao.address
            }
        );
    }
}

export interface PlaceDAO {
    id: number;
    title: string;
    image_uri: string;
    latitude: number;
    longitude: number
    address: string;
}

export type LocationWithAddress = Location & { address: string }

export type Location = { latitude: number, longitude: number }
