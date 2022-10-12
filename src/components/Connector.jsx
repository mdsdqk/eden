export default function Connector({ status }) {
	let width = "w-0";

	switch (status) {
		case "active":
			width = "w-1/2";
			break;

		case "completed":
			width = "w-full";
			break;

		default:
			break;
	}

	return (
		<div className="w-full bg-gray-100 h-0.5">
			<div className={`${width} bg-blue h-0.5`}></div>
		</div>
	);
}