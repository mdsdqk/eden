import Connector from "./Connector";
import Step from "./Step";

export default function StepProgressBar({ step, totalSteps }) {
	return (
		<div className="flex max-w-xs mx-auto my-3">
			{
				Array(totalSteps).fill().map((x, i, { length }) => {
					let stepNum = i + 1;
					if (stepNum === length) {
						return (
							<div key={stepNum} className="w-max">
								<Step stepNumber={stepNum} completed={stepNum <= step}></Step>
							</div>
						);
					}

					let status;

					if (stepNum < step) status = "completed";
					else if (stepNum === step) status = "active";
					else status = "pending";

					return (
						<div key={stepNum} className="flex items-center mx-auto w-full">
							<Step stepNumber={stepNum} completed={stepNum <= step}></Step>
							<Connector status={status}></Connector>
						</div>
					);
				})
			}
		</div>
	);
}