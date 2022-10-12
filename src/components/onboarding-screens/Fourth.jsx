import FormHeader from "../FormHeader";
import Button from "../Button";
import checkedIcon from "../../assets/checked.gif";

export default function Fourth({ displayName }) {
	displayName = displayName || "Eren";

	return (
		<div className="mt-16">
			<div className="mx-auto w-12 rounded-full bg-blue flex items-center justify-center">
				<img src={checkedIcon} alt="Onboarding Complete Icon" className="p-3" />
			</div>
			<FormHeader title={`Congratulations, ${displayName}!`} subTitle="You have completed the onboarding, you can start usinng the Eden!"></FormHeader>
			<div className="max-w-sm mx-auto">

				<Button type="button" buttonText="Launch Eden"></Button>

			</div>

		</div>
	);
}