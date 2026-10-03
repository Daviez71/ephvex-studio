import Hero from "../components/Hero";
import Intro from "../components/Intro";
import WhatWeCreate from "../components/WhatWeCreate";
import HighlightReel from "../components/HighlightReel";

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WhatWeCreate />
      <HighlightReel videoUrl="https://res.cloudinary.com/vgeopgc7/video/upload/v1790678396/video_2026-09-29_11-38-52.mp4" />
    </>
  );
}

export default Home;
