import FormHeader from "../FormHeader";
import Button from "../Button";
import RadioCard from "../RadioCard";
import selfIcon from "../../assets/user-solid.svg";
import groupIcon from "../../assets/users-solid.svg";
import { useState } from "react";

export default function Third({ onSubmit }) {
	const [form, setForm] = useState({
		usage: ""
	});

	const handleChange = (e) => {
		const updatedForm = {
			usage: e.target.value
		};


		setForm(updatedForm);
		console.log(e, form, updatedForm);

	};

	return (
		<div className="my-16">
			<FormHeader title="How are you planning to use Eden?" subTitle="We'll streamline your setup experience accordingly."></FormHeader>
			<div className="max-w-sm mx-auto">
				<form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
					<div className="flex items-stretch">
						<RadioCard id="self" name="usage" selected={form.usage === "self"} icon={selfIcon} iconSize="w-4" title="For myself" body="Write better. Think more clearly. Stay Organized." onChange={handleChange} />
						<RadioCard id="group" name="usage" selected={form.usage === "group"} icon={groupIcon} iconSize="w-5" title="With my team" body="Wikis, docs, tasks & projects, all in one place." onChange={handleChange} />
					</div>
					<Button type="submit" buttonText="Create Workspace"></Button>
				</form>
			</div>

		</div>
	);
}