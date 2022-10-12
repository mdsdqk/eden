export default function RadioCard({ id, name, selected, onChange, icon, iconSize, title, body }) {
	let borders = selected && "border-blue";

	return (

		<div className={`flex-1 my-2 mx-3 border rounded-lg px-5 pb-4 ${borders}`}>
			<input type="radio" name={name} id={id} className="appearance-none"
				value={id} onChange={onChange}
			/>

			<label htmlFor={id} className="cursor-pointer h-full">
				<img src={icon} alt={`${id} button icon`} className={`${iconSize} mb-2`} />
				<p className="font-bold text-sm text-gray-700 mt-4 mb-2">{title}</p>
				<p className="text-xs text-gray-500 my-1">{body}</p>
			</label>

		</div>


	);
}