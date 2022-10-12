import FormHeader from "../FormHeader";
import Button from "../Button";
import TextInput from "../TextInput";
import { useState } from "react";

export default function Second({ onSubmit }) {
	const [form, setForm] = useState({
		workspaceName: "",
		workspaceUrl: ""
	});

	const handleChange = (e) => {
		const updatedForm = {
			...form,
			[e.target.id]: e.target.value
		};


		setForm(updatedForm);
	};

	return (
		<div>
			<FormHeader title="Let's set up a home for all your work" subTitle="You can always create another workspace later"></FormHeader>
			<div className="max-w-xs mx-auto">
				<form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
					<TextInput id="workspaceName" placeholder="Eden" label="Workspace Name"
						value={form.workspaceName} onChange={handleChange}
					/>
					<TextInput id="workspaceUrl" placeholder="Example" label="Workspace URL" optional={true} groupText="www.eden.com/"
						value={form.workspaceUrl} onChange={handleChange}
					/>

					<Button type="submit" buttonText="Create Workspace"></Button>
				</form>
			</div>

		</div>
	);
}