// import "./App.css";
import Front from "./components/front";
import Navbar from "./components/navbar";
import Marquee from "./components/Marquee";

function App() {
  return (
    <>
      <div className=" w-full min-h-screen bg-zinc-900 text-white">
        <Navbar />
        <Front />
        <Marquee />
      </div>
    </>
  );
}

export default App;
