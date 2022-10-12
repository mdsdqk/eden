import FormHeader from "../FormHeader";
import Button from "../Button";
import TextInput from "../TextInput";
import { useState } from "react";

export default function First({ onSubmit }) {
	const [form, setForm] = useState({
		fullName: "",
		displayName: ""
	});

	const handleChange = (e) => {
		const updatedForm = {
			...form,
			[e.target.id]: e.target.value
		};


		setForm(updatedForm);
	};

	return (
		<div className="my-16">
			<FormHeader title="Welcome! First things first..." subTitle="You can always change them later"></FormHeader>
			<div className="max-w-sm mx-auto">
				<form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
					<TextInput id="fullName" placeholder="Steve Jobs" label="Full Name"
						value={form.fullName} onChange={handleChange}
					/>

					<TextInput id="displayName" placeholder="Steve" label="Display Name"
						value={form.displayName} onChange={handleChange}
					/>

					<Button type="submit" buttonText="Create Workspace"></Button>
				</form>
			</div>

		</div>
	);
}