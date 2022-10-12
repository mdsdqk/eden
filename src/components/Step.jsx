export default function Step({ completed, stepNumber }) {
	let classNames = completed ?
		"bg-blue text-white" :
		"bg-white border-gray-200";


	return (
		<div className="w-max">
			<div className={`border rounded-full w-8 h-8 leading-7 text-xs text-center ${classNames}`}>
				{stepNumber}
			</div>
		</div>
	);
}