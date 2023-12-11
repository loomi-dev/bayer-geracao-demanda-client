import { ReasonInput, ValidatorTable } from './components';

type PlanningValidatorProps = {
  isApproving: boolean;
  actionsToEvaluate: PlanningAction[];
};

export const PlanningValidator = ({ actionsToEvaluate, isApproving }: PlanningValidatorProps) => (
  <>
    <ValidatorTable actions={actionsToEvaluate} isApproving={isApproving} />
    <ReasonInput />
  </>
);
