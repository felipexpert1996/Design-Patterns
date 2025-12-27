import Playlist from "./Playlist";
import Song from "./Song";

const playlist = new Playlist();
const song1 = new Song("Faint", "Linkin Park");
const song2 = new Song("Enter Sandman", "Metallica");
const song3 = new Song("Everlong", "Foo Fighters");
playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);
const iterator = playlist.createIterator()

while (iterator.hasNext()) {
    const song = iterator.next();
    console.log(`🎵 Touching: ${song.title} by ${song.artist}`);
}
