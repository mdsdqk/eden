export default function TextInput({ id, label, placeholder, optional, groupText, value, onChange }) {
	return (
		<div className="m-2 w-100 mb-3">
			<label htmlFor={id} className="block mb-1 text-sm">
				<span className="font-medium text-gray-600">{label}</span>
				{
					optional && <span className="font-medium text-gray-400"> (optional) </span>
				}

			</label>
			<div className="flex items-center">
				{
					groupText &&
					<span className="px-3 text-sm font-medium text-gray-400 bg-gray-50 p-2.5 rounded-l-md border border-gray-300 ">
						{groupText}
					</span>
				}
				<input placeholder={placeholder} type="text" name={id} id={id} value={value} onChange={onChange}
					className={`bg-white border border-gray-200 text-gray-600 text-sm ${groupText ? "border-l-0 rounded-r-md" : "rounded-md"} focus:outline-none focus-visible:ring-blue focus-visible:border-blue w-full p-2.5`}
				/>
			</div>
		</div>
	);
}