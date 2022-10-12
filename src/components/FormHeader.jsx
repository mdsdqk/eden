export default function FormHeader({ title, subTitle }) {
	return (
		<div className="mx-4 my-8 text-center">
			<h2 className="text-xl sm:text-2xl font-bold m-2 text-gray-800">{title}</h2>
			<h3 className="text-sm font-semibold text-gray-400 m-1">{subTitle}</h3>
		</div>
	);
}