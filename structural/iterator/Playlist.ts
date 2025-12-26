import Aggregator from "./Aggregator";
import Iterator from "./Iterator";
import SequentialIterator from "./SequentialIterator";
import Song from "./Song";

export default class Playlist implements Aggregator<Song>{

    private songs: Song[] = [];

    createIterator(): Iterator<Song> {
        return new SequentialIterator(this.songs);
    }

    addSong(song: Song){
        this.songs.push(song);
    }

    getSongs(): Song[]{
        return this.songs;
    }

}