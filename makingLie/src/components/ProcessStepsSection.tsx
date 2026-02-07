import ProcessStepCard from "./ProcessStepCard";

type Step = {
  icon: string;
  step: number;
  title: string;
  description: string;
  borderColor: string;
};

type Props = {
  steps: Step[];
};

const ProcessStepsSection = ({ steps }: Props) => {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {steps.map((s) => (
        <ProcessStepCard key={s.step} {...s} />
      ))}
    </section>
  );
};

export default ProcessStepsSection;
