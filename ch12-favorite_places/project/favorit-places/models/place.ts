import Uuid from "expo-modules-core/src/uuid";

export class Place {
    private _id: string;
    private _title: string;
    private _imageUri: string;
    private _address: string;
    private _location: Location;

    constructor(title: string, imageUri: string, address: string, location: Location) {
        this._id = Uuid.v4();
        this._title = title;
        this._imageUri = imageUri;
        this._address = address;
        this._location = location;
    }


    get id(): string {
        return this._id;
    }

    // this._id does not need a setter in frontend but in backend for PUT requests
    // set id(value: string) {
    //     this._id = value;
    // }

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
}

type Location = { lat: number, lang: number };