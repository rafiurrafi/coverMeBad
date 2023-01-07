import { useContext } from "react";
import { PlayerContext } from "../../context/player.context";
import { CgPlayButton } from "react-icons/cg";
import { GrPrevious, GrNext } from "react-icons/gr";
import { HiOutlinePause } from "react-icons/hi";
import { BsVolumeDownFill, BsPlayFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import {
  PlayerContainer,
  PlayerLeft,
  PlayerMiddle,
  PlayerProgress,
  PlayerProgressbar,
} from "./player.style";
import { useWindowSize } from "../../utils/custom-hooks";
import { Link } from "react-router-dom";
import LikeBtn from "../like-btn/like-btn.component";
import { SongContext } from "../../context/song.context";
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
  const width = useWindowSize();
  const { toggleLikedSongs } = useContext(SongContext);
  function dragHandler(e) {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  }
  function getTime(time) {
    return (
      Math.floor(time / 60) + " : " + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  function adjustVolume(e) {
    audioRef.current.volume = e.target.value / 100;
  }
  return (
    <>
      {width > 900 ? (
        <PlayerContainer>
          <PlayerLeft>
            <img src={currentSong.cover} alt="" />
            <div className="player-title">
              <h3>{currentSong.title}</h3>
            </div>
          </PlayerLeft>
          <PlayerMiddle>
            <div className="player-control">
              <button>
                <MdOutlineArrowBackIosNew />
              </button>
              <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <IoMdPause /> : <FaPlay />}
              </button>
              <button>
                <MdOutlineArrowForwardIos />
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
            <div className="player-volume">
              <BsVolumeDownFill style={{ transform: "scale(1.15)" }} />
              <input type="range" min={1} max={100} onChange={adjustVolume} />
            </div>
          </div>
        </PlayerContainer>
      ) : (
        <PlayerContainer>
          <PlayerLeft>
            <img src={currentSong.cover} alt="" />
            <div className="player-title">
              <h3>{currentSong.title}</h3>
            </div>
          </PlayerLeft>
          <div className="small-size-icons">
            <LikeBtn
              size={25}
              name={currentSong.title}
              item={currentSong}
              onClick={() => toggleLikedSongs(currentSong)}
              isLiked={currentSong.liked}
            />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{ transform: "scale(1.5)" }}
            >
              {isPlaying ? <IoMdPause /> : <FaPlay />}
            </button>
          </div>
          <PlayerProgress percent={animationPercentage} />
        </PlayerContainer>
      )}
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
