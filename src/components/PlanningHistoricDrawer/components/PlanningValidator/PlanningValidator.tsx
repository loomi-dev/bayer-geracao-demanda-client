import { ReasonInput, ValidatorTable } from './components';

type PlanningValidatorProps = {
  isApproving: boolean;
  actionsToEvaluate: PlanningAction[];
};

export const PlanningValidator = ({ actionsToEvaluate, isApproving }: PlanningValidatorProps) => {
  console.log(actionsToEvaluate);
  return (
    <>
      <ValidatorTable actions={actionsToEvaluate} isApproving={isApproving} />
      <ReasonInput />
    </>
  );
};
