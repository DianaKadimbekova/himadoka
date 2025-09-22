import track1 from "../../assets/music/2.mp3";

export const SliderMusic = () => {
  const handleTrackPrev = () => {};
  const handleTrackNext = () => {};
  return (
    <>
      <button onClick={handleTrackPrev}>{"<"}</button>
      <div>
        <audio controls src={track1}></audio>
      </div>
      <button onClick={handleTrackNext}>{">"}</button>
    </>
  );
};
