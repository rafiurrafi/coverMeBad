import { useContext } from "react";
import { PlayerContext } from "../../context/player.context";
import { CgPlayTrackPrev, CgPlayButton, CgPlayTrackNext } from "react-icons/cg";
import { HiOutlinePause } from "react-icons/hi";
import { BsVolumeDownFill } from "react-icons/bs";
import {
  PlayerContainer,
  PlayerLeft,
  PlayerMiddle,
  PlayerProgressbar,
} from "./player.style";
import { RangeInput } from "../input/input.component";
const Player = () => {
  const {
    currentSong,
    audioRef,
    isPlaying,
    setIsPlaying,
    timeUpdate,
    songInfo,
    setSongInfo,
  } = useContext(PlayerContext);
  const { currentTime, duration, animationPercentage } = songInfo;

  function dragHandler(e) {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  }
  function getTime(time) {
    return (
      Math.floor(time / 60) + " : " + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  return (
    <>
      <PlayerContainer>
        <PlayerLeft>
          <img src="" alt="" />
          <div className="player-title">
            <h3>{currentSong.title}</h3>
          </div>
        </PlayerLeft>
        <PlayerMiddle>
          <div className="player-control">
            <button>
              <CgPlayTrackPrev />
            </button>
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <HiOutlinePause /> : <CgPlayButton />}
            </button>
            <button>
              <CgPlayTrackNext />
            </button>
          </div>
          <PlayerProgressbar percent={animationPercentage}>
            <p>{getTime(currentTime) || 0}</p>
            <div className="track">
              <input
                type="range"
                onChange={dragHandler}
                value={currentTime}
                min={0}
                max={duration || 0}
              />
              <div className="animate-track"></div>
            </div>
            <p>{getTime(duration) || 0}</p>
          </PlayerProgressbar>
        </PlayerMiddle>
        <div className="player-right">
          <div>
            <BsVolumeDownFill />
          </div>
        </div>
      </PlayerContainer>
      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onLoadedData={timeUpdate}
      />
    </>
  );
};

export default Player;
