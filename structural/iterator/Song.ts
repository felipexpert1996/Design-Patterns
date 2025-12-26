export default class Song {
    private _title: string;
    private _artist: string;

    constructor(title: string, artist: string){
        this._artist = artist;
        this._title = title;
    }

    public get artist(): string {
        return this._artist;
    }
    public set artist(value: string) {
        this._artist = value;
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

}