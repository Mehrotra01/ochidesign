import Front from "./components/front";
import Navbar from "./components/navbar";
import Marquee from "./components/marquee";
import About from "./components/about";
import EyeAnimate from "./components/eyeAnimate";

function App() {
	return (
		<>
			<div className=" w-full min-h-screen bg-zinc-900 text-white">
				<Navbar />
				<Front />
				<Marquee />
				<About />
				< EyeAnimate />
			</div>
		</>
	);
}

export default App;
