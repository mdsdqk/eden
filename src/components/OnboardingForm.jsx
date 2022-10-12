import StepProgressBar from "./StepProgressBar";
import Fourth from "./onboarding-screens/Fourth";
import { useState } from "react";
import First from "./onboarding-screens/First";
import Second from "./onboarding-screens/Second";
import Third from "./onboarding-screens/Third";

export default function OnboardingForm() {
	const [step, setStep] = useState(1);
	const [onboardingForm, setOnboardingForm] = useState({
		fullName: "",
		displayName: "",
		workspaceName: "",
		workspaceUrl: "",
		usage: ""
	});

	const handleUpdate = (e) => {
		const updatedForm = {
			...onboardingForm,
			...e
		};
		const nextStep = step + 1;

		setOnboardingForm(updatedForm);
		setStep(nextStep);
	};

	return (
		<div>
			<StepProgressBar step={step} totalSteps={4}></StepProgressBar>

			{
				step === 1 && <First onSubmit={handleUpdate}></First>
			}
			{
				step === 2 && <Second onSubmit={handleUpdate}></Second>
			}
			{
				step === 3 && <Third onSubmit={handleUpdate}></Third>
			}
			{
				step === 4 && <Fourth displayName={onboardingForm.displayName}></Fourth>
			}
		</div>
	);
}