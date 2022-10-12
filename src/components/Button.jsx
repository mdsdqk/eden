export default function Button({ type, buttonText }) {
	return (
		<div className="mx-2 my-5">
			<button type={type} className="block w-full rounded-md bg-blue hover:bg-blue focus:ring-2 focus:ring-blue text-white font-normal text-xs py-3 focus:outline-none">
				{buttonText}
			</button>
		</div>
	);
}