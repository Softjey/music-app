import React, { useEffect, useState } from "react";
import Repeat from "../constants/RepeatButtonState";
import Song from "../types/Song";

interface AudioContextType {
  currentSong: Song | null,
  isPlaying: boolean,
  repeat: Repeat,
  tooglePlaying: () => void,
  toggleRepeat: () => void,
}

export const AudioContext = React.createContext<AudioContextType>({
  currentSong: null,
  isPlaying: false,
  repeat: Repeat.None,
  tooglePlaying: () => { },
  toggleRepeat: () => { },
});

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeat, setRepeat] = useState(Repeat.None);

  const tooglePlaying = () => setIsPlaying(!isPlaying);

  const toggleRepeat = () => {
    switch (repeat) {
      case Repeat.None:
        setRepeat(Repeat.Playlist);
        break;
      case Repeat.Playlist:
        setRepeat(Repeat.Song);
        break;
      case Repeat.Song:
        setRepeat(Repeat.None)
        break;
    }
  }

  const handleKeyUp = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Space':
        tooglePlaying();
        break;
      case 'r':
        toggleRepeat();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const value: AudioContextType = {
    currentSong,
    isPlaying,
    repeat,
    tooglePlaying,
    toggleRepeat,
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};