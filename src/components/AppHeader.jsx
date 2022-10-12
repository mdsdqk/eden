import logo from "../assets/eden-icon.png";

export default function AppHeader() {
	return (
		<div className="w-100 flex flex-row items-center justify-center m-12 mt-24">
			<img src={logo} alt="Eden Logo" />
			<h1 className="font-bold text-2xl">Eden</h1>
		</div>
	);
}