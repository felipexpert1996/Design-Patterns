import Iterator from "./Iterator";
import Song from "./Song";

export default class SequentialIterator implements Iterator<Song>{

    private songs: Song[];
    private position: number = 0;

    constructor(songs: Song[]){
        this.songs = songs;
    }

    next(): Song {
        if(this.hasNext()){
            const song = this.songs[this.position];
            this.position += 1;
            return song;
        }
        throw new Error("The array does not have a next item.");
    }
    hasNext(): boolean {
        return this.position < this.songs.length;
    }
    
}