import {  Front,  Navbar,  Marquee,Footer,Ready,  About,EyeAnimate,FeaturedProjects} from "./components/index";

function App() {
  return (
    <>
      <div className=" w-full min-h-screen bg-zinc-900 text-white">
        <Navbar />
        <Front />
        <Marquee />
        <About />
        <EyeAnimate />
        <FeaturedProjects />
        <Ready />
        <Footer/>
      </div>
    </>
  );
}

export default App;
